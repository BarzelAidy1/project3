import { observer } from "mobx-react"
import serviceData from "../../data/serviceData";
import './Service.css'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import loginStore from "../../data/loginStore";
import AddMeeting from "../meeting/AddMeeting";
import { useEffect, useState } from "react";
import AddService from "./AddService";
import { getService } from "../../data/serviceServer";

const Service = (observer(() => {
  const [selectService, setSelectService] = useState(null)

  useEffect(() => {

    getService()
  }, [])
  return (
    <>
      {serviceData.serviceList.map((details, id) => {
        return (
          <Card id="card" sx={{ maxWidth: 350 }}>
            <CardActionArea>
              <CardMedia id="image"
                component="img"

                image={details.image}
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
              {!loginStore.isLogin ? <Button size="small" color="primary" onClick={() => setSelectService(details.name)}>
                להזמנה
              </Button> : null}
            </CardActions>
          </Card>

        )
      }

      )}
      {loginStore.isLogin ? <AddService /> : null}
      {selectService ? <AddMeeting serviceId={selectService} /> : null}

    </>
  )
}))

export default Service