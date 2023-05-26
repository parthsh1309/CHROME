let krishnaNames=[
    {
       "names":"Om Shri Krishnaya Namaha"
    },
    {
       "names":"Om Kamala Nathaya Namaha"
    },
    {
       "names":"Om Vaasudevaya Namaha"
    },
    {
       "names":"Om Sanatanaya Namaha"
    },
    {
       "names":"Om Vasu devatma jaaya Namaha"
    },
    {
       "names":"Om Punyaya Namaha"
    },
    {
       "names":"Om Lila-Manusha-Vigrahaya Namaha"
    },
    {
       "names":"Om Shrivatsa Kausthubha-Dharaya Namaha"
    },
    {
       "names":"Om Yashoda-Vatsalaya Namaha"
    },
    {
       "names":"Om Haraye Namaha"
    },
    {
       "names":"Om Chaturbhujatta-Chakrasi-Gada-Shankadhyayudhaya Namaha"
    },
    {
       "names":"Om Devaki Nandanaya Namaha"
    },
    {
       "names":"Om Shrisaya Namaha"
    },
    {
       "names":"Om Nandagopa Priyatmajaya Namaha"
    },
    {
       "names":"Om Yamunavega Samharine Namaha"
    },
    {
       "names":"Om Balabhadra Priyanujaya Namaha"
    },
    {
       "names":"Om Putana Jivita Haraya Namaha"
    },
    {
       "names":"Om Shakatasura Bhanjanaya Namaha"
    },
    {
       "names":"Om Nandavraja Jana Nandine Namaha"
    },
    {
       "names":"Om Sachidananda Vigrahaya Namaha"
    },
    {
       "names":"Om Navanita Viliptangaya Namaha"
    },
    {
       "names":"Om Navanita Nataya Namaha"
    },
    {
       "names":"Om Anaghaya Namaha"
    },
    {
       "names":"Om Navanita Navaharaya Namaha"
    },
    {
       "names":"Om Muchukunda Prasadakaya Namaha"
    },
    {
       "names":"Om Shodasha Sthri Sahasreshaya Namaha"
    },
    {
       "names":"Om Tribhangi Lalitakritaye Namaha"
    },
    {
       "names":"Om Sukavag Amritabhdhindave Namaha"
    },
    {
       "names":"Om Govindaya Namaha"
    },
    {
       "names":"Om Yoginam Pataye Namaha"
    },
   
]
let krishn = document.querySelector(".krishna-names")
const func = () => {
    let index = Math.floor(Math.random() * krishnaNames.length - 1);
    console.log(index);
    krishn.innerHTML = krishnaNames[index].names;
}

setInterval(func, 8080);
