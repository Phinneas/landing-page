import * as React from "react";
import { Link, navigate } from "gatsby";

import {
  Heading,
  Stack,
  Flex,
  Drawer,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerFooter,
  Button,
  Input,
  useDisclosure,
  Box,
  Image,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from "@chakra-ui/core";
import DorgMenu from "./DorgMenu";
import DorgSocial from "./DorgSocial";
import DorgMark from "../../images/icons/dOrg-mark.svg";
import "../../styles/style.css";

// import GitHubIcon from "../common/icons/GitHub";
// import DiscordIcon from "../common/icons/Discord";
// import dOrgIcon from "../../images/icons/dOrg.svg";

export const TopBar: React.FC = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        align="center"
        wrap="wrap"
        justify="space-between"
        p={"1rem"}
        position="absolute"
        top={0}
        right={0}
        left={0}
        zIndex={1000}
      >
        <Flex>
          <Text color={"white"} fontWeight="thin">
            <Link to={"#"}>
              {" "}
              <Image
                src={DorgMark}
                m={"5vw"}
                height="8rem"
                display="inline"
                mr="1rem"
              />
            </Link>
          </Text>
        </Flex>
        <Flex algin="flex-end">
          {/* <Button variant="ghost" rightIcon="chevron-down" fontSize="1em">
            English
            </Button> */}
          {/* <Button onClick={onOpen} rightIcon="drag-handle" variant="ghost" /> */}
        </Flex>
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>dOrg</DrawerHeader>

          <DrawerBody>
            <DorgMenu />
          </DrawerBody>

          <DrawerFooter>
            <DorgSocial />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

// eslint-disable-next-line
// interface Props extends WithStyles<typeof styles> {}

// const TopBar: React.FC<Props> = ({ classes }) => {
//   const [open, setOpen] = React.useState(false);

//   return (
//     <AppBar position={"static"} className={classes.appBar}>
//       <Toolbar className={classes.toolbar}>
//         <IconButton
//           onClick={() => setOpen(true)}
//           className={classes.menuButton}
//         >
//           <MenuIcon className={classes.menuIcon} />
//         </IconButton>
//         <Drawer
//           open={open}
//           onClose={() => setOpen(false)}
//           anchor={"left"}
//           classes={{
//             paper: classes.menuPaper
//           }}
//         >
//           <List>
//             {[
//               {
//                 title: "Home",
//                 onClick: () => navigate("/")
//               },
//               {
//                 title: "About",
//                 onClick: () => navigate("/about")
//               },
//               {
//                 title: "Create A DAO",
//                 onClick: () => window.open("https://dorg.tech/#/dapp")
//               },
//               {
//                 title: "Hire dOrg",
//                 onClick: () =>
//                   window.open("https://dorgtech.typeform.com/to/Q1LOP1")
//               },
//               {
//                 title: "Join dOrg",
//                 onClick: () =>
//                   window.open("https://dorgtech.typeform.com/to/a1rMob")
//               },
//               {
//                 title: "View Our DAO",
//                 onClick: () =>
//                   window.open(
//                     "https://alchemy.daostack.io/dao/0xbe1a98d3452f6da6e0984589e545d4fc25af7526"
//                   )
//               }
//             ].map(item => (
//               <ListItem
//                 button
//                 key={item.title}
//                 onClick={() => {
//                   item.onClick();
//                   setOpen(false);
//                 }}
//               >
//                 <ListItemText
//                   primary={item.title}
//                   className={classes.menuItem}
//                 />
//               </ListItem>
//             ))}
//           </List>
//         </Drawer>
//         <Grid container justify={"center"} alignItems={"center"}>
//           <div className={classes.bracket}>{"{"}</div>
//           <Link to="/">
//             <CardMedia image={dOrgIcon} className={classes.image} />
//           </Link>
//           <div className={classes.bracket}>{"}"}</div>
//         </Grid>
//         <div className={classes.contactIcons}>
//           <IconButton
//             className={classes.contactIcon}
//             size={"small"}
//             onClick={() => window.open("https://github.com/dOrgTech")}
//           >
//             <GitHubIcon />
//           </IconButton>
//           <IconButton
//             className={classes.contactIcon}
//             size={"small"}
//             onClick={() => window.open("https://discord.gg/Z5R4CcS")}
//           >
//             <DiscordIcon />
//           </IconButton>
//           <IconButton
//             className={classes.contactIcon}
//             size={"small"}
//             onClick={() => window.open("mailto:contact@dorg.tech")}
//           >
//             <MailIcon />
//           </IconButton>
//         </div>
//       </Toolbar>
//     </AppBar>
//   );
// };

// const styles = (theme: Theme) =>
//   createStyles({
//     appBar: {
//       background: "rgba(2, 46, 46, 0.2)",
//       pointerEvents: "all",
//       // bring forward (infront of background)
//       position: "relative"
//     },
//     toolbar: {
//       marginBottom: "5px"
//     },
//     menuButton: {
//       position: "absolute",
//       left: "10px"
//     },
//     menuIcon: {
//       color: "#4bd2c6"
//     },
//     menuPaper: {
//       background: "rgba(2, 46, 46, 0.9)",
//       height: "305px",
//       top: "75px"
//     },
//     menuItem: {
//       color: "#4bd2c6"
//     },
//     image: {
//       height: "59px",
//       width: "122px",
//       marginTop: "5px"
//     },
//     bracket: {
//       pointerEvents: "none",
//       fontSize: "50px",
//       color: "#4bd2c6",
//       marginRight: "15px",
//       marginLeft: "15px",
//       "-webkit-animation": "neon 1.5s ease-in-out infinite alternate",
//       "-moz-animation": "neon 1.5s ease-in-out infinite alternate",
//       animation: "neon 1.5s ease-in-out infinite alternate"
//     },
//     contactIcons: {
//       position: "absolute",
//       right: "10px"
//     },
//     contactIcon: {
//       color: "#4bd2c6",
//       margin: "5px"
//     },
//     logoButton: {
//       color: "rgba(2, 46, 46, 0.1)",
//       backgroundColor: "rgba(2, 46, 46, 0.1)",
//       "&:hover": {
//         backgroundColor: "rgba(1, 1, 1, 0.2)"
//       },
//       margin: "10px"
//     }
//   });

// export default withStyles(styles)(TopBar);
