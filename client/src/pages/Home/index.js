import { Container, makeStyles, TextField } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '2rem',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '3rem',
    color: ' #e74c3c ',
    alignItems: 'center',
    border: 'solid',
  },
  element: {
    justifyContent: 'center',
    display: 'flex',
    marginTop: '2rem',
    fontWeight: '500',
    textDecoration: 'line-through',
  },
  addField: {
    marginBottom: '2rem',
    display: 'flex',
    alignItems: 'center',
  },
}));

const Home = () => {
  const [items, setItems] = useState(null);
  const [addElemField, setAddElemField] = useState('');

  const baseURL =
    process.env.REACT_APP_BASE_URL || 'http://localhost:5000/items';
  console.log(process.env);
  const refreshData = () => {
    axios
      .get(baseURL)
      .then((res) => {
        console.log(res.data.data);
        setItems(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    refreshData();
  }, []);

  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <div className={classes.addField}>
        <TextField
          id="standard-basic"
          label="Ajouter un élément"
          value={addElemField}
          onChange={(e) => setAddElemField(e.target.value)}
        />
        <AddCircleIcon
          onClick={() => {
            if (addElemField !== '') {
              axios
                .post(baseURL, {
                  name: addElemField,
                  crossed: false,
                })
                .then((res) => {
                  console.log(res);
                  refreshData();
                  setAddElemField('');
                })
                .catch((err) => console.log(err));
            }
          }}
          style={{ cursor: 'pointer' }}
          color="primary"
        />
      </div>
      <div className={classes.title}>Liste</div>
      {items
        ? items.map((element, index) => {
            console.log(element);
            return (
              <div
                id={index}
                className={classes.element}
                onClick={() => {
                  axios
                    .post(`${baseURL}/${element._id}`, {
                      crossed: !element.crossed,
                      name: element.name,
                    })
                    .then((res) => refreshData())
                    .catch((err) => console.log(err));
                }}
                style={{
                  textDecoration: element.crossed ? 'line-through' : 'none',
                }}
              >
                {element.name}
                <EditIcon style={{ cursor: 'pointer' }} />
                <DeleteIcon
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    axios
                      .delete(`${baseURL}/${element._id}`)
                      .then(() => refreshData())
                      .catch((err) => console.log(err));
                  }}
                />
              </div>
            );
          })
        : "Pas d'éléments"}
    </Container>
  );
};

export default Home;
