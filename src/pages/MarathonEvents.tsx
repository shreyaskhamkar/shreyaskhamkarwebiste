// import React from "react";
// import {
//   Card,
//   CardActionArea,
//   CardMedia,
//   CardContent,
//   Typography,
//   Grid,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// const marathonEvents = [
//   { id: 1, title: "Tata Ultra Marathon", image: "/images/tata-ultra.jpg" },
//   { id: 2, title: "Mumbai Marathon", image: "/images/mumbai-marathon.jpg" },
// ];

// const Marathons: React.FC = () => {
//   const navigate = useNavigate();

//   return (
//     <Grid container spacing={2} padding={2}>
//       {marathonEvents.map((event) => (
//         <Grid item xs={12} sm={6} md={4} key={event.id}>
//           <Card>
//             <CardActionArea onClick={() => navigate(`/marathons/${event.id}`)}>
//               <CardMedia
//                 component="img"
//                 height="200"
//                 image={event.image}
//                 alt={event.title}
//               />
//               <CardContent>
//                 <Typography variant="h6">{event.title}</Typography>
//               </CardContent>
//             </CardActionArea>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export default Marathons;
