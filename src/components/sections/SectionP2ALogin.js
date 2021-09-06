import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import People from "@material-ui/icons/People";
import Email from "@material-ui/icons/Email";
import BusinessIcon from '@material-ui/icons/Business';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import MessageIcon from '@material-ui/icons/Message';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import styles from "assets/jss/main/sections/P2AloginSyle";


import { API } from "aws-amplify";


const useStyles = makeStyles(styles);

async function addcontact() {
  const data = {
    body: {
      name: formState.name,
      company: formState.company,
      email: formState.email,
      phoneno: formState.phoneno,
      message: formState.message
    }
  };

  console.log(data);
  const apiData = await API.post('formapi', '/contact', data);
  console.log({ apiData });
  alert('Mail sent');
}

const formState = { name: '',company:'',email: '',phoneno:'', message: '' };

function updateFormState(key, value) {
  formState[key] = value;
}

export default function SectionP2ALogin() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <form>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <form className={classes.form}>
                <CardHeader  className={classes.cardHeader}>
                <Typography variant="h5" gutterBottom>Interested in Advertising....</Typography>
                </CardHeader>
                <p className={classes.divider}>We'll get in touch with you</p>
                <CardBody className={classes.cardBody}>
                  <TextField
                      fullWidth
                      label="Name"
                      type="name"
                      name="name"
                      onChange={e => updateFormState('name', e.target.value)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Company"
                      type="company"
                      name="company"
                      onChange={e => updateFormState('company', e.target.value)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <BusinessIcon className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      name="email"
                      onChange={e => updateFormState('email', e.target.value)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                          <Email className={classes.inputIconsColor} />
                        </InputAdornment>
                        ),
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Phoneno"
                      type="phoneno"
                      name="phoneno"
                      onChange={e => updateFormState('phoneno', e.target.value)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <ContactPhoneIcon className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <TextField
                      id="standard-multiline-static"
                      label="Message"
                      name="message"
                      onChange={e => updateFormState('message', e.target.value)}
                      multiline
                      fullWidth
                      rows={4}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <MessageIcon className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  <Button onClick={addcontact} simple color="primary" size="lg">
                    SUBMIT
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </GridItem>
        </GridContainer>
        </form>
      </div>
    </div>
  );
}
