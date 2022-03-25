import React from "react";
import { Typography, AppBar , Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar,Container } from '@material-ui/core'
import { PhotoCamera } from "@material-ui/icons";

const App = () =>{
   return (
       <>
           <CssBaseline />
           <AppBar position="relative">
               <Toolbar>
                   <PhotoCamera/>
                   <Typography variant="h6">
                        Photo Album
                   </Typography>
               </Toolbar>
           </AppBar>
           <main>
               <div>
                   <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </Typography>
                        <div>
                            <Grid container spacing={2} justify="center">
                                    <Grid item>
                                        <Button variant="contained" color="primary">
                                                See my photos
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" color="primary">
                                                Contact
                                        </Button>
                                    </Grid>
                            </Grid>
                        </div>
                   </Container>
               </div>
           </main>
       </>
   )
}

export default App;