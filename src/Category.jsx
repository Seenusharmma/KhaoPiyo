import burger from '../src/assets/burger.png'
import pizza from '../src/assets/pizza.png'
import thali from '../src/assets/thali.png'
import soup from '../src/assets/soup.png'
import biriyani from '../src/assets/biriyani.png'
import pasta from '../src/assets/pasta.png'
import all from '../src/assets/all.png'
import breads from '../src/assets/breads.png'
import salads from '../src/assets/salads.png'
import staters from '../src/assets/staters.png'
import drinks from '../src/assets/drinks.png'
const categories = [
    {
        id: 1,
        name: "all",
        image : <img src={all} alt="" className="w-[70px] h-[60px] rounded-full"/>
    },
    {
        id: 2,
        name: "biryani",
        image: <img src={biriyani} alt="" className="w-[70px] h-[60px]"/>
    },
    {
        id: 3,
        name: "pizza",
        image: <img src={pizza} alt="" className="w-[70px] h-[60px]"/>
    },
    {
        id: 4,
        name: "pasta",
        image: <img src={pasta} alt="" className="w-[70px] h-[60px]"/>
    },
    {
        id: 5,
        name: "thali",
        image: <img src={thali} alt="" className="w-[70px] h-[60px]"/>
    },
    {
        id: 6,
        name: "burger",
        image: <img src={burger} alt="" className="w-[70px] h-[60px]"/>
    },
    {
        id: 7,
        name: "soups",
        image: <img src={soup} alt="" className="w-[70px] h-[60px]" />
    },
    {
        id: 8,
        name: "breads",
        image: <img src={breads} alt="" className="w-[70px] h-[60px]" />
    },
    {
        id: 9,
        name: "salads",
        image: <img src={salads} alt="" className="w-[70px] h-[60px]" />
    },
    {
        id: 10,
        name: "staters",
        image: <img src={staters} alt="" className="w-[70px] h-[60px]" />
    },
    {
        id: 11,
        name: "drinks",
        image: <img src={drinks} alt="" className="w-[70px] h-[60px]" />
    }
    
]

export default categories;