import React,{useCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const history = useHistory();
  const ver_inicio = useCallback(() => history.push('/'), [history]);
  const ver_tienda_en_linea = useCallback(() => history.push('/tienda'), [history]);

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
              <Tab label="Inicio" onClick={ver_inicio}/>
              <Tab label="Tienda en linea" onClick={ver_tienda_en_linea} />
              <Tab label="Ofertas" />
              <Tab label="Ubicaciones" />


      </Tabs>
    </Paper>
  );
}
