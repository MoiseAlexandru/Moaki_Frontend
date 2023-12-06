
export const usersData = [
    {
      username: "Wanderlust24",
      fullname: "Sarah Adams",
      bio: " 🌍✈️ Adventure seeker, food lover, and storyteller",
      photoname: "profilePics/Wanderlust24.jpeg"
    },
    {
      username: "TechGeek87",
      fullname: "Alex Chen",
      bio: "Tech aficionado passionate about all things digital🖥️🚀",
      photoname: "profilePics/TechGeek87.jpeg"
    },
    {
      username: "FitnessFanatic22",
      fullname: "Emily Johnson",
      bio: "Fitness freak committed to a healthy lifestyle 🏋️‍♀️💪",
      photoname: "profilePics/FitnessFanatic22.jpeg"
    },
    {
      username: "ArtsyExplorer",
      fullname: "Javier Gomez",
      bio: "🎨🎶 Join me in exploring the wonders of creativity!",
      photoname: "profilePics/ArtsyExplorer.jpeg"
    },
    {
      username: "BookwormJane",
      fullname: "Jane Miller",
      bio: "📚🌟 Let's discuss books and share literary adventures",
      photoname: "profilePics/BookwormJane.jpeg"
    },
    {
      username: "FoodieEats",
      fullname: "Michael Nguyen",
      bio: "🍔🌮 Join me for culinary discoveries and tasty escapades!",
      photoname: "profilePics/FoodieEats.jpeg"
    },
    {
      username: "SustainableSoul",
      fullname: "Maya Patel",
      bio: "🌱♻️ Let's make a positive impact together!",
      photoname: "profilePics/SustainableSoul.jpeg"
    },
    {
      username: "ComedyCentral123",
      fullname: "Sam Wilson",
      bio: "Spreading laughter one joke at a time 😂",
      photoname: "profilePics/ComedyCentral123.jpeg"
    },
    {
      username: "FashionistaKate",
      fullname: "Kate Thompson",
      bio: "👗👠 Let's talk fashion and express our unique styles!",
      photoname: "profilePics/FashionistaKate.jpeg"
    },
    {
      username: "PetLoverXOXO",
      fullname: "Rachel Garcia",
      bio: "Animal lover, advocate for furry friends, and proud pet parent. 🐾🐶",
      photoname: "profilePics/PetLoverXOXO.jpeg"
    }];

    export default function userFilter(query) {
        if(!query)
            return [];
    
        const filterResults = usersData.filter((user) => user.username.toLowerCase().includes(query.toLowerCase()));
        return filterResults;
    }