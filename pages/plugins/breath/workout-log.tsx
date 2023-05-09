import Link from 'next/link';
import WorkoutLogForm from '../../../components/Form/RoutineForm';
import { DualPanelLayout } from '../../../components/Shared/DualPanelLayout';
import { Typography } from '../../../components/Shared/Typography';
const WorkoutLogPage = () => {

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds();
  const createdAt = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`;
  const ts =  new Date().toISOString();



  return(<DualPanelLayout
    leftPanel={
        <>
            <Typography large >plugin/breath</Typography>
            <Typography small><Link href={"/plugins/breath/workout-log"}>Final Form</Link></Typography>
        </>
    }
    rightPanel={
        <>
            <WorkoutLogForm />
        </>
    } /> )
  };

export default WorkoutLogPage;
