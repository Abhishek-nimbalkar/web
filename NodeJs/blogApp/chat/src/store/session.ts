/* abstract */ class SessionStore {
  findSession(id: string) {}
  saveSession(id: string, session: string) {}
  findAllSessions() {}
  sessions: any;
  redisClient: any;
}

class InMemorySessionStore extends SessionStore {
  constructor() {
    super();
    this.sessions = new Map();
  }

  findSession(id: string) {
    return this.sessions.get(id);
  }

  saveSession(id: string, session: any) {
    this.sessions.set(id, session);
  }

  findAllSessions() {
    return [...this.sessions.values()];
  }
}
const SESSION_TTL = 24 * 60 * 60;
const mapSession = ([userID, userName, connected]: any) =>
  userID ? { userID, userName, connected: connected === "true" } : undefined;

class RedisSessionStore extends SessionStore {
  constructor(redisClient: any) {
    super();
    this.redisClient = redisClient;
  }

  findSession(id: any) {
    return this.redisClient
      ?.hmget(`session:${id}`, "userID", "userName", "connected")
      ?.then(mapSession);
  }

  saveSession(id: any, { userID, userName, connected }: any) {
    this.redisClient
      ?.multi()
      ?.hset(
        `session:${id}`,
        "userID",
        userID,
        "userName",
        userName,
        "connected",
        connected
      )
      ?.expire(`session:${id}`, SESSION_TTL)
      ?.exec();
  }

  async findAllSessions() {
    const keys = new Set();
    let nextIndex = 0;
    do {
      const [nextIndexAsStr, results] = await this.redisClient?.scan(
        nextIndex,
        "MATCH",
        "session:*",
        "COUNT",
        "100"
      );
      nextIndex = parseInt(nextIndexAsStr, 10);
      results?.forEach((s: any) => keys?.add(s));
    } while (nextIndex !== 0);
    const commands: any = [];
    keys?.forEach((key) => {
      commands?.push(["hmget", key, "userID", "userName", "connected"]);
    });
    return this.redisClient
      ?.multi(commands)
      ?.exec()
      ?.then((results: any) => {
        return results
          ?.map(([err, session]: any) => (err ? undefined : mapSession(session)))
          ?.filter((v: any) => !!v);
      });
  }
}

export { InMemorySessionStore, RedisSessionStore };
