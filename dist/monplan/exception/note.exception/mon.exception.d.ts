export declare class MonsException extends Error {
    readonly message: string;
    constructor(message?: string);
    what(): string;
}
