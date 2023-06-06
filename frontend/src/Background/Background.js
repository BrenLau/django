import './background.css'

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

const Background = () => {
    console.log(images)
    return (
        <div className="background">
            <div className='firstlayer'>

                <div className='firstlayer1' style={{ backgroundImage: `url(${images[`Pattern.png`]})` }}>
                    {/* <img className='pattern1' src={images[`Pattern.png`]}></img>
                    <img className='pattern1' src={images[`Pattern.png`]}></img>
                    <img className='pattern1' src={images[`Pattern.png`]}></img> */}
                </div>
                <div className='firstlayer2'></div>
                <div className='firstlayer3'></div>

            </div>


        </div>
    )
}

export default Background
