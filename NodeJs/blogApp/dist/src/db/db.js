"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // await mongoose.connect("mongodb+srv://Abhishek:Abhishek2023@atlascluster.ifyowmc.mongodb.net/?retryWrites=true&w=majority/blogApp");
            yield mongoose_1.default.connect("mongodb://127.0.0.1:27017/blogApp");
            console.log("Database connected");
        }
        catch (err) {
            console.error(err);
        }
    });
}
exports.connect = connect;
//# sourceMappingURL=db.js.map