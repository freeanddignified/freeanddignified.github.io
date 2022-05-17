import React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { DataGrid } from '@mui/x-data-grid';
import Box from "@mui/material/Box";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import BackOfficeModalShops from "../../components/BackOfficeModalShops";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const BackOfficeShop = () => {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'product', headerName: 'Продукт', width: 270 },
    { field: 'status', headerName: 'Статус', width: 80 },
    { field: 'inventory', headerName: 'Наявність', type: 'number', width: 90},
    { field: 'type', headerName: 'Тип', width: 80 },
    { field: 'vendor', headerName: 'Вендор', width: 180 },
    { field: 'sell', headerName: '', width: 220, renderCell: () => {
        return (
            <Button variant="outlined" onClick={handleOpen}>Продати закордоном</Button>
        )
      }
    },
  ];
  const rows = [
    { id: 1, product: 'Футболка патриотична | UA Lips |', status: 'draft', inventory: '0', type: 'Одяг', vendor: 'Продавець PrintLab' },
    { id: 2, product: 'Футболка патриотична | UA Lips |', status: 'draft', inventory: '0', type: 'Одяг', vendor: 'Продавець PrintLab' },
    { id: 3, product: 'Футболка патриотична | UA Lips |', status: 'draft', inventory: '0', type: 'Одяг', vendor: 'Продавець PrintLab' },
    { id: 4, product: 'Футболка патриотична | UA Lips |', status: 'draft', inventory: '0', type: 'Одяг', vendor: 'Продавець PrintLab' },
    { id: 5, product: 'Футболка патриотична | UA Lips |', status: 'draft', inventory: '0', type: 'Одяг', vendor: 'Продавець PrintLab' }
  ]

  return <div>
    {/*<img src="./img/store.png" width="682" height="212" alt="store" style={{width: '100%', height: 'auto'}}/>*/}
    <Box>
      <Stack spacing={2} direction="row">
        <Button variant="contained">Статистика</Button>
        <Button variant="contained">Логістика</Button>
        <Button variant="contained">Покупки</Button>
        <Button variant="contained">Аналітика</Button>
      </Stack>
      <Stack direction="row" sx={{alignItems: 'center', justifyContent: 'space-between', margin: '16px 0'}}>
        <Typography variant="h5" component="div">
          Товари
        </Typography>
        <Button variant="contained" onClick={handleOpen}>Додати товар</Button>
      </Stack>
    </Box>
    <Card>
      <CardContent>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="All" id={`simple-tab-${0}`} />
              <Tab label="Active" id={`simple-tab-${1}`} />
              <Tab label="Draft" id={`simple-tab-${2}`} />
              <Tab label="Archived" id={`simple-tab-${3}`} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  checkboxSelection
              />
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  checkboxSelection
              />
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  checkboxSelection
              />
            </div>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  checkboxSelection
              />
            </div>
          </TabPanel>
        </Box>
      </CardContent>
    </Card>
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
    >
      <Fade in={open}>
        <Card sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60%',
          backgroundColor: 'background.paper',
          boxShadow: 24,
          p: 0,
        }}>
          <CardContent sx={{p: 3}}>
            <BackOfficeModalShops/>
          </CardContent>
        </Card>
      </Fade>
    </Modal>
  </div>
};

export default BackOfficeShop;

