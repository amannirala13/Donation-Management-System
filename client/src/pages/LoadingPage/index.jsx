export const LoadingPage = ()=>{
    return(
        <div className={"w-full min-h-max h-[320px] grid place-content-center"}>
            <div className={"text-center font-semibold"}>
                Loading
            </div>
            <div className={"flex gap-1 text-center text-xl"}>
                <span className={"animate-spin"}>
                    O
                </span>
                <span className={"animate-spin"}>
                    O
                </span>
                <span className={"animate-spin"}>
                    O
                </span>
                <span className={"animate-spin"}>
                    O
                </span>
            </div>
        </div>
    )
}