
import video from "../Videos/Res.mp4";

function Header(){
    return(
        <div className="head">
        <h1>HOME</h1>
        <h1>SERVICES</h1>
        <h1>RATINGS</h1>
        <h1>COMMENTS</h1>
        <h1>ABOUT</h1>
       </div>
    )
}
export default Header;

export function Comment(){
  return(
    <div className="comm">
    <textarea name="" id=""placeholder="write your comments...." style={{width:"600px"}}></textarea>
    <h1 style={{color:"", textAlign:"center",padding:"40px",fontStyle:"italic"}}>“Every dish tells a story,
every bite feels like home.”</h1>
    <img src="images.jpg" alt="" />
        </div>
  )
}

export function Footer(){
    return(
    <div className="footer">
        <div>
    <div className="footer-contact">
  <h4>Contact Us</h4>
  <p>📞 +91 93329 87234</p>
  <p>📧 chandu@gmail.com</p>
  <p>⏰ Open Daily: 10:00 AM – 11:00 PM</p>
</div>

    <audio controls autoPlay muted><source src="audio.mp3"/></audio>
    </div >
     <video controls width={"250px"} height={"250px"} ><source src={video} /></video>
    </div>
    )
}

// export function Listrender(){
//     const students=["Arya","Rahul","Aisha","Kiran"];
//     return(
//         <div>
//         <h1>Hello</h1>
//         <ul>
//         {
//             students.map((name, index)=>{
//                 return <li key={index}>{name}</li>
//             })
//         }
//         </ul>
//         </div>
//     )
// }

// export function Stylecard({title,image,price,discription}){
//     return(
//         <div className="cards">
//             <div className="card">
//                 <h1>{title}</h1>
//                 <img src={image} alt="" />
//                 <h2>{price}</h2>
//                 <p style={{color:"blue"}}>{discription}</p>
//              </div>
        
//         </div>
//     )
// }

export function Parent(){
    return(
        <div className="marq">
        <marquee behavior="" direction="">Hello Everyone Welcome To ---<span style={{color:"gold"}}>నా పొట్ట నా ఇష్టం</span></marquee>
        </div>
        
    )
}

export function Carddd(){
    var plist = [
  {
    title: "Biryani",
    image: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg",
    price: "₹250",
    rating:4.0,
    description: "Classic South Indian chicken biryani with aromatic spices."
  },
  {
    title: "Pizza",
    image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg",
    price: "₹180",
    rating:4.5,
    description: "Italian pizza topped with mozzarella cheese and vegetables."
  },
  {
    title: "Dum Biryani",
    image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg",
    price: "₹200",
    rating:3.0,
    description: "Slow-cooked dum biryani with rich flavors."
  },
  {
    title: "Noodles",
    image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
    price: "₹100",
    rating:3.5,
    description: "Stir-fried noodles with vegetables and sauces."
  },
  {
    title: "Burger",
    image: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg",
    price: "₹120",
    rating:5.0,
    description: "Juicy veg burger with fresh lettuce and cheese."
  },
  {
    title: "Fried Rice",
    image: "https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg",
    price: "₹140",
    rating:4.0,
    description: "Chinese-style fried rice with vegetables."
  },
  {
    title: "Pasta",
    image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
    price: "₹160",
    rating:4.0,
    description: "Creamy white sauce pasta with herbs."
  },
  {
    title: "Sandwich",
    image: "https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg",
    price: "₹90",
    rating:4.5,
    description: "Grilled sandwich stuffed with vegetables."
  },
  {
    title: "French Fries",
    image: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg",
    price: "₹80",
    rating:3.0,
    description: "Crispy golden french fries."
  },
  {
    title: "Manchurian",
    image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
    price: "₹150",
    rating:5.0,
    description: "Veg manchurian tossed in spicy sauce."
  },
  {
    title: "Paneer Curry",
    image: "https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg",
    price: "₹220",
    rating:4.0,
    description: "Paneer cooked in rich tomato gravy."
  },
  {
    title: "Chicken Curry",
    image: "https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg",
    price: "₹260",
    rating:4.5,
    description: "Traditional spicy chicken curry."
  },
  {
    title: "Ice Cream",
    image: "https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg",
    price: "₹70",
    rating:3.5,
    description: "Vanilla ice cream with chocolate topping."
  },
  {
    title: "Cake",
    image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg",
    price: "₹300",
    rating:4.0,
    description: "Soft chocolate cake with cream layers."
  },
  {
    title: "Juice",
    image: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg",
    price: "₹60",
    rating:4.0,
    description: "Fresh mixed fruit juice."
  },
  {
    title: "Coffee",
    image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg",
    price: "₹50",
    rating:4.5,
    description: "Hot brewed coffee with rich aroma."
  }
];

return(
    <div className="c">{
     plist.map((item,index)=>(
        <div key={index} className="ch">
        <h1 style={{color:"blueviolet"}}>{item.title}</h1>
        <img src={item.image} alt="" style={{width:"220px", height:"180px"}}/>
        <div className="mai">
        <div className="p">
        <h2>{item.price}</h2>
          <div className="rating">
        {"★".repeat(item.rating)}
        {"☆".repeat(5 - item.rating)}
      </div>
        </div>
        <p style={{fontSize:"15px"}}>{item.description}</p>
     </div>
     </div>))}
    </div>
)
}





