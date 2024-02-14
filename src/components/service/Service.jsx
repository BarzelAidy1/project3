import { observer } from "mobx-react"
import { useTheme } from '@mui/material/styles';
import serviceData from "../../data/serviceData";
import './Service.css'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@mui/material";

const Service = (observer(() => {
  
  const theme = useTheme();
  
  return (
      <>
          {serviceData.serviceList.map((details, id) => {
              return (
                <Card id="card" sx={{ maxWidth: 150 }}>
                  <CardActionArea>
                    <CardMedia id="image"
                      component="img"
                      height="140"
                      image ={details.image}
                      alt="עוצמה של הפקה"
                    />
                    <CardContent id="orderDetails">
                      <Typography gutterBottom variant="h5" component="div">
                        {details.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {details.describtion}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      להזמנה
                    </Button>
                  </CardActions>
                </Card>

              )
          }
          
          )}
       
      </>
  )
}))

  export default Service