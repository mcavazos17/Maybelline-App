import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PanToolIcon from '@mui/icons-material/PanTool';
import HearingIcon from '@mui/icons-material/Hearing';
import Drawer from '@mui/material/Drawer';

const HamburgerDrawer = (props: { visible: boolean }) => {
  const [IsOpen, setIsOpen] = React.useState(false);
  const toggleDrawer =
    (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setIsOpen(open);
    };

    React.useEffect(() => {
        setIsOpen(props.visible);
      }, [props.visible]);

  return (
        <Drawer
        anchor='left'
        open={IsOpen}
        onClose={() => { toggleDrawer(false); }}
        >
            <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => { toggleDrawer(false); }}
            onKeyDown={() => { toggleDrawer(false); }}
            >
            <List>
                {['Home', 'Shop All', 'Tips & Trends'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon>
                    {index == 0 ? <HomeIcon /> : index == 1 ? <ShoppingBagIcon /> : <BookmarksIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Face', 'Eyes', 'Ears', 'Nails'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon>
                    {index == 0 ? <FaceRetouchingNaturalIcon /> : index == 1 ? <VisibilityIcon /> : index == 2 ? <HearingIcon /> : <PanToolIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
                ))}
            </List>
            </Box>
        </Drawer>
  );
}

export default HamburgerDrawer;