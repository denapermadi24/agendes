import AgendaKegiatan from '../views/pages/agenda-kegiatan';
import RiwayatAgenda from '../views/pages/riwayat';
import Tentang from '../views/pages/tentang';
import Beranda from '../views/pages/beranda';
import PopupDetailAgenda from '../views/pages/popup-detail';
import DashboardAdmin from '../views/pages/dashboard-agenda';

const routes = {
  '/': Beranda,
  '/admin': DashboardAdmin,
  '/agenda-kegiatan': AgendaKegiatan,
  '/detail-kegiatan': PopupDetailAgenda,
  '/riwayat-agenda': RiwayatAgenda,
  '/tentang': Tentang,
};

export default routes;
