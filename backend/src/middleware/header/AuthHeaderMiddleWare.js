export function authHeaderMiddleWare(req: Request, res: Response, next: (any)=>{}){
    if(!req.headers.authorization) {
        req.authToken = null;
        next();
        return;
    }
    req.authToken = req.headers.authorization.split(" ")[1];
    next();
}