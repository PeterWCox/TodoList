//NOTE: This component will only used for SB testing

export interface IHeadingProps {
    heading: string
}

export const Headings = (props: IHeadingProps) => {
    return (
        <div>
            <div>
                <h1>h1</h1>
                <h2>h2</h2>
                <h3>h3</h3>
                <h4>h4</h4>
                <h5>h5</h5>
                <h6>h6</h6>
            </div>

            <div>
                <div className="body0">body0</div>
                <div className="body1">body1</div>
                <div className="body2">body2</div>
                <div className="body3">body3</div>
                <div className="body4">body4</div>
            </div>
        </div>
    )
}
