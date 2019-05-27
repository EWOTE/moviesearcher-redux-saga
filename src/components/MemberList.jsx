//WIP
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Face from '@material-ui/icons/Face';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  avatar: {
    marginRight: 10,
    width: 60,
    height: 60
  }
});

const MemberList = ({
  members = [{ name: '', photo: '', id: 0 }],
  who = ''
}) => {
  const classes = useStyles();
  return (
    <Container fluid>
      <Box display="flex">
        <Typography>Режиссёры:</Typography>
        <ul>
          {members.map(member => (
            <React.Fragment key={member.id}>
              {member.photo ? (
                <Avatar
                  className={classes.avatar}
                  title={member.name}
                  alt={member.name}
                  src={`https://image.tmdb.org/t/p/w200${member.photo}`}
                />
              ) : (
                <Face className={classes.avatar} />
              )}

              <p>{member.name}</p>
            </React.Fragment>
          ))}
        </ul>
      </Box>
      {/* {who}
      {members.map(member => (
        <List key={member.id}>
          <ListItem>
            <ListItemAvatar>
              {member.photo ? (
                <Avatar
                  className={classes.avatar}
                  title={member.name}
                  alt={member.name}
                  src={`https://image.tmdb.org/t/p/w200${member.photo}`}
                />
              ) : (
                <Face className={classes.avatar} />
              )}
            </ListItemAvatar>
            <ListItemText primary={member.name} />
          </ListItem>
        </List>
      ))} */}
    </Container>
  );
};
MemberList.propTypes = {
  members: PropTypes.array.isRequired
};

export default MemberList;
