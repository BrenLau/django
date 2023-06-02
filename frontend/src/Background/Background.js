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

                <div className='firstlayer1'>
                    <img className='pattern1' src={images[`Pattern.png`]}></img>
                    <img className='pattern1' src={images[`Pattern.png`]}></img>
                    <img className='pattern1' src={images[`Pattern.png`]}></img>
                </div>

            </div>


        </div>
    )
}

export default Background
