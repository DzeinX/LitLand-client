import {Preloader} from "../Preloader";

export const SubmitButton = ({isLoading, children}) => {
    if (isLoading) return <button type="submit">
        <Preloader size={"small"} color={"#fff"}/>
    </button>

    return <button type="submit">{children}</button>
}