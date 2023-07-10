import CreateEmail from '../components/CreateEmail/CreateEmail';
import './background.css'
import TourDates from '../components/TourDates/TourDates';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

const Background = () => {
    // console.log(images)
    return (
        <div className="background">
            <div className='firstlayer'>

                <div className='firstlayer1' style={{ backgroundImage: `url(${images[`Pattern.png`]})` }}>

                </div>

                {/* <img className='portrait' src={images[`Ozuna Portrait.png`]}></img> */}
                {/* <img className='afroeurotour' src={images[`Afro Euro Tour - Logo.png`]}></img> */}
                <img className='portrait2' src={images[`Combined2.png`]}></img>
                <div className='spacer'>
                    <TourDates />
                </div>

                <div className='spacer'>
                    <CreateEmail></CreateEmail>
                </div>
                <img className='afrologo' src={images[`Afro Logo.png`]}></img>
            </div>


        </div>
    )
}

export default Background
