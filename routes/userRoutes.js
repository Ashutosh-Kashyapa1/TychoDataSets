const express = require('express');
const router = express.Router();
const methodOverride = require('method-override');
//require session
const session = require('express-session')
require('dotenv').config();
var SESSION_SECRET =process.env.SESSION_SECRET
router.use(methodOverride('_method'));
const user =express()
const path =require('path')
const userController =require('../controllers/userController')
const multer = require('multer')
const{upload} = require('../middleware/upload');
const uploads = multer({ storage: multer.memoryStorage() });
const auth = require('../middleware/adminAuth')

router.post('/',userController.userSignup);
router.get('/login',auth.isLogout ,userController.getLoginForm);
router.post('/login', userController.userLogin);
router.get('/logout',auth.isLogin,userController.getLogout)
router.post('/sendEmail',uploads.single("attachment") ,userController.sendEmail)
router.get('/search',userController.getSearchByName)
router.get('/table-view',auth.isLogin ,userController.getTableView) //endpoints for rendering table.
router.post('/pagination', userController.getPagination)//pagination endpoints
router.delete('/delete/:id',userController.deleteData)
router.put('/update/:id', userController.updateData)
router.get('/dataView/:id',auth.isLogin, userController.dataView)

 router.post('/importuser',upload.single('file'), userController.importUser);
 router.get('/',auth.isLogin,(req,res)=>{
  res.render('pages/examples/login');
});



module.exports = router;


