import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProgressBar } from 'primereact/progressbar';
import '../assets/css/integrations.css'

const Integrations = ({ integrations }) => {
  const rateTemplate = (rowData) => <ProgressBar value={rowData.rate} />;
  const logoTemplate = (rowData) => <img src={`~/src/assets/images/${rowData.logo}`} alt={rowData.name} style={{ width: '30px' }} />;

  return (
    <DataTable className='integrations' value={integrations}>
      <Column field="name" header="Application" body={logoTemplate}></Column>
      <Column field="type" header="Type"></Column>
      <Column field="rate" header="Rate" body={rateTemplate}></Column>
      <Column field="profit" header="Profit" body={(data) => `$${data.profit}`}></Column>
    </DataTable>
  );
};

export default Integrations;
