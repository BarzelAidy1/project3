import { observer } from "mobx-react"
import { useTheme } from '@mui/material/styles';
import meetingData from "../../data/meetingData";
import './Meeting.css'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@mui/material";

const Meeting = (observer(() => {
  
  const theme = useTheme();
  
  return (
      <>
          {meetingData.meetingList.map((details, id) => {
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

  export default Meeting