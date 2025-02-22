import { PassportStrategy } from "@nestjs/passport";
 import { ExtractJwt, Strategy } from "passport-jwt";

export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'abc123'
        });
    }

    validate(payload: any) {
        console.log("Inside JWT Strategy");
        console.log("payload", payload)
        return payload;
    }
}