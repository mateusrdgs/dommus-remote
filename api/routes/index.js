import express from 'express';
import * as accountController from '../controllers/account';
import * as userController from '../controllers/user';
import * as residenceController from '../controllers/residence';

const router = express.Router();

router.post('/account', accountController.createAccount);
router.get('/account/:idAccount', accountController.returnAccount);
router.put('/account/:idAccount', accountController.updateAccount);
router.delete('/account/:idAccount', accountController.deleteAccount);

router.post('/account/:idAccount/users', userController.createUser);
router.get('/account/:idAccount/users', userController.returnUsers);
router.get('/account/:idAccount/users/:idUser', userController.returnUserById);
router.put('/account/:idAccount/users/:idUser', userController.updateUserById);
router.delete('/account/:idAccount/users/:idUser', userController.deleteUserById);

router.post('/account/:idAccount/residences', residenceController.createResidence);
router.get('/account/:idAccount/residences', residenceController.returnResidences);
router.get('/account/:idAccount/residences/:idResidence', residenceController.returnResidenceById);
router.put('/account/:idAccount/residences/:idResidence', residenceController.updateResidenceById);
router.delete('/account/:idAccount/residences/:idResidence', residenceController.deleteResidenceById);

export default router;