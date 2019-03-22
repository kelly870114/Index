import React from 'react';
import PropTypes from 'prop-types';
//import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import orange from '@material-ui/core/colors/orange';
import purple from '@material-ui/core/colors/purple';
//import green from '@material-ui/core/colors/green';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Logo from './image/goodmorning.png';
import Amusement from './image/amusementpark.png';

const styles = theme => ({
  root: {
    //display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  margin: {
    margin: theme.spacing.unit,
    alignItems: 'center',
    marginLeft: 400,
  },
  cssLabel: {
    '&$cssFocused': {
      color: orange[300],
    },
  },
  cssFocused: {},
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: orange[300],
    },
  },
  notchedOutline: {},
  bootstrapRoot: {
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  box: {
      color: purple[800],
      '&$checked': {
          color: purple[800],
      },
  },
  checked: {},

  amusementpark: {
    marginTop: 10,
  },
});


class OutlinedTextFields extends React.Component {
    state = {
        checkedA: false,
      };
    
    
    handleChange = name => event => {
        this.setState({
        [name]: event.target.value,
        [name]: event.target.checked,
    });
    };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
          
        <FormControl className={classes.margin}>
        <img src ={Logo} height ="113" width ="168"/>
        <TextField
            className={classes.margin}
            InputLabelProps={{
            classes: {
                root: classes.cssLabel,
                focused: classes.cssFocused,
            },
            }}
            InputProps={{
            classes: {
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
            },
            }}
            id="outlined-email-input"
            label="Email"
            className={classes.textField}
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
        
      />
        <TextField
            className={classes.margin}
            InputLabelProps={{
            classes: {
                root: classes.cssLabel,
                focused: classes.cssFocused,
            },
            }}
            InputProps={{
                classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                },
            }}
            id="outlined-password-input"
            label="Password"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
        />

        <FormControlLabel
            control={
              <Checkbox
                checked={this.state.checkedA}
                onChange={this.handleChange('checkedA')}
                value="checkedA"
                classes={{
                    root: classes.box,
                    checked: classes.checked,
                }}
              />
            }
            label="記住密碼"
          /> 
          <div className={classes.amusementpark}>
            <img src ={Amusement} height ="139" width ="432" />    
          </div>                  
        </FormControl>
        
    </div>

    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};


  
    
  
OutlinedTextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};
  

export default withStyles(styles)(OutlinedTextFields);