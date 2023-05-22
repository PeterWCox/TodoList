export const images = [
    'https://pbs.twimg.com/profile_images/1100804485616566273/sOct-Txm_400x400.png',
    'https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png',
    'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png',
]

export const AboutApp = () => {
    return (
        <div className="Todo">
            <div className="TodoContent">
                {/* Header */}
                <div className="Row Row_spacing_2xl">
                    <div className="Column Column_span_12 TodoHeader">
                        {/* Title */}
                        <h1>Developed by Peter Cox</h1>

                        <img
                            src="./profilePhoto.png"
                            alt="Avatar"
                            style={{
                                width: 300,
                                height: 300,
                                borderRadius: '50%',
                                objectFit: 'cover',
                            }}
                        />

                        {/* Technologies used */}
                        <section
                            className="Column Column_span_12"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                gap: '1rem',
                            }}
                        >
                            <h2>Technologies used:</h2>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    alignItems: 'center',
                                    gap: '0.3rem',
                                }}
                            >
                                {images.map((image) => (
                                    <img
                                        height={75}
                                        width={75}
                                        src={image}
                                        alt="logo"
                                    />
                                ))}
                            </div>
                        </section>

                        {/* Features */}
                        <section>
                            <h1>Features</h1>
                            <ul>
                                <li>Drag and drop</li>
                                <li>Recycle bin</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
