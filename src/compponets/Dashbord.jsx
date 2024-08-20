import { useState, useEffect } from "react";
import axios from "axios";
import {
  styled,
  createTheme,
  ThemeProvider,
  Button,
  Stack,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import PersonIcon from "@mui/icons-material/Person";
import { mainListItems } from "./ListItems";
import "./List.css";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const defaultTheme = createTheme();

const Dashbord = () => {
  const [open, setOpen] = useState(true);
  const [data, setData] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [newTeacher, setNewTeacher] = useState({
    img: "",
    title: "",
    price: "",
    des: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(`https://66a9fe90613eced4eba71d31.mockapi.io/furniro`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEdit = (teacherId) => {
    const teacher = data.find((t) => t.id === teacherId);
    setSelectedTeacher(teacher);
    setEditModalOpen(true);
  };

  const handleEditSubmit = () => {
    axios
      .put(
        `https://66a9fe90613eced4eba71d31.mockapi.io/furniro/${selectedTeacher.id}`,
        selectedTeacher
      )
      .then(() => {
        fetchData();
        setEditModalOpen(false);
      })
      .catch((error) => {
        console.error("Error updating teacher:", error);
      });
  };

  const handleDelete = (teacherId) => {
    const teacher = data.find((t) => t.id === teacherId);
    setSelectedTeacher(teacher);
    setDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    axios
      .delete(
        `https://66a9fe90613eced4eba71d31.mockapi.io/furniro/${selectedTeacher.id}`
      )
      .then(() => {
        fetchData();
        setDeleteModalOpen(false);
      })
      .catch((error) => {
        console.error("Error deleting teacher:", error);
      });
  };

  const handleAddTeacher = () => {
    const formData = new FormData();
    formData.append("img", newTeacher.img);
    formData.append("title", newTeacher.title);
    formData.append("price", newTeacher.price);
    formData.append("des", newTeacher.des);

    axios
      .post(`https://66a9fe90613eced4eba71d31.mockapi.io/furniro`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        fetchData();
        setAddModalOpen(false);
        setNewTeacher({
          img: "",
          title: "",
          price: "",
          des: "",
        });
      })
      .catch((error) => {
        console.error("Error adding teacher:", error);
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px",
              backgroundColor: "#b88e2f",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={() => setOpen(!open)}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              FURNIRO
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <Link to="/profil">
                  {" "}
                  <PersonIcon />
                </Link>
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={() => setOpen(!open)}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">{mainListItems}</List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 20, mb: 4 }}>
            <Grid container spacing={0}>
              <Stack spacing={0} direction="row">
                <Stack sx={{ mt: -17, mb: 4 }} width={700}>
                  <TextField
                    label="Search"
                    size="small"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </Stack>
                <Stack width={200} sx={{ mt: -17, mb: 4, ml: 3 }}>
                  <TextField
                    label="Name"
                    select
                    fullWidth
                    size="small"
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                  >
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="Junior">Lolito</MenuItem>
                    <MenuItem value="Middle">Syltherine</MenuItem>
                    <MenuItem value="Senior">Adobe Stock</MenuItem>
                    <MenuItem value="Senior">Divan</MenuItem>
                  </TextField>
                </Stack>
                <Stack sx={{ mt: -17, mb: 4, ml: 3 }}>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => setAddModalOpen(true)}
                  >
                    Add Furniro
                  </Button>
                </Stack>
              </Stack>
              <Stack>
                <Table
                  className="tableALLL"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TableContainer component={Paper}>
                    <Table
                      sx={{ minWidth: 1100 }}
                      size="medium"
                      aria-label="a dense table"
                    >
                      <TableHead>
                        <TableRow>
                          <TableCell align="center">Image</TableCell>
                          <TableCell align="center">Name</TableCell>
                          <TableCell align="center">Price</TableCell>
                          <TableCell align="center">Description</TableCell>
                          <TableCell align="center">Edit</TableCell>
                          <TableCell align="center">Delete</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {data
                          ?.filter((teacher) =>
                            teacher.des
                              .toLowerCase()
                              .includes(search.toLowerCase())
                          )
                          ?.filter((teacher) =>
                            selectedLevel === "All"
                              ? true
                              : teacher.title === selectedLevel
                          )
                          ?.map((row) => (
                            <TableRow key={row.id} className="divan">
                              <TableCell align="center">
                                <img src={row.img[0]} alt="" width="100" />
                              </TableCell>
                              <TableCell align="center">{row.title}</TableCell>
                              <TableCell align="center">{row.price}</TableCell>
                              <TableCell align="center">{row.des}</TableCell>

                              <TableCell align="center">
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={() => handleEdit(row.id)}
                                >
                                  Edit
                                </Button>
                              </TableCell>
                              <TableCell align="center">
                                <Button
                                  variant="contained"
                                  color="error"
                                  onClick={() => handleDelete(row.id)}
                                >
                                  Delete
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Table>
              </Stack>
            </Grid>
          </Container>
        </Box>
      </Box>

      <Dialog open={editModalOpen} onClose={() => setEditModalOpen(false)}>
        <DialogTitle>Edit Teacher</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="editTeacherImg"
            label="Image"
            type="file"
            fullWidth
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                setSelectedTeacher({
                  ...selectedTeacher,
                  img: URL.createObjectURL(file),
                });
              }
            }}
          />
          <TextField
            margin="dense"
            id="editTeacherName"
            label="Name"
            type="text"
            fullWidth
            value={selectedTeacher ? selectedTeacher.title : ""}
            onChange={(e) =>
              setSelectedTeacher({
                ...selectedTeacher,
                title: e.target.value,
              })
            }
          />
          <TextField
            margin="dense"
            id="editTeacherPrice"
            label="Price"
            type="text"
            fullWidth
            value={selectedTeacher ? selectedTeacher.price : ""}
            onChange={(e) =>
              setSelectedTeacher({
                ...selectedTeacher,
                price: e.target.value,
              })
            }
          />
          <TextField
            margin="dense"
            id="editTeacherDes"
            label="Description"
            type="text"
            fullWidth
            value={selectedTeacher ? selectedTeacher.des : ""}
            onChange={(e) =>
              setSelectedTeacher({
                ...selectedTeacher,
                des: e.target.value,
              })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditModalOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleEditSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Confirm Deletion</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Are you sure you want to delete {selectedTeacher?.title}?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteModalOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirm} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={addModalOpen} onClose={() => setAddModalOpen(false)}>
        <DialogTitle>Add New Teacher</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="newTeacherImg"
            label="Image"
            type="file"
            fullWidth
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                setNewTeacher({
                  ...newTeacher,
                  img: URL.createObjectURL(file),
                });
              }
            }}
          />
          <TextField
            margin="dense"
            id="newTeacherName"
            label="Name"
            type="text"
            fullWidth
            value={newTeacher.name}
            onChange={(e) =>
              setNewTeacher({ ...newTeacher, name: e.target.value })
            }
          />
          <TextField
            margin="dense"
            id="newTeacherPrice"
            label="Price"
            type="text"
            fullWidth
            value={newTeacher.price}
            onChange={(e) =>
              setNewTeacher({ ...newTeacher, price: e.target.value })
            }
          />
          <TextField
            margin="dense"
            id="newTeacherDes"
            label="Description"
            type="text"
            fullWidth
            value={newTeacher.des}
            onChange={(e) =>
              setNewTeacher({ ...newTeacher, des: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAddModalOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddTeacher} color="success">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

export default Dashbord;
