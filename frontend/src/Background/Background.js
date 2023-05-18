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
            {images ? Object.keys(images).map((image) => {
                return (
                    <img className='backgroundimg' src={images[image]}></img>
                )
            }) : null}

        </div>
    )
}

export default Background
