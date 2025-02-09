import BarChartBox from '../../components/barChartBox/BarChartBox';
import BIgChartBox from '../../components/bigChartBox/BIgChartBox';
import ChartBox from '../../components/chartBox/ChartBox';
import PieChartBox from '../../components/pieChartBox/PieChartBox';
import TopBox from '../../components/topBox/TopBox';
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from '../../data';
import './home.scss';


const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2"><ChartBox {...chartBoxUser}/></div>
      <div className="box box3"><ChartBox {...chartBoxProduct}/></div>
      <div className="box box4"><PieChartBox /></div>
      <div className="box box5"><ChartBox {...chartBoxRevenue}/></div>
      <div className="box box6"><ChartBox {...chartBoxConversion}/></div>
      <div className="box box7"><BIgChartBox /></div>
      <div className="box box8"><BarChartBox {...barChartBoxVisit}/></div>
      <div className="box box9"><BarChartBox {...barChartBoxRevenue}/></div>
    </div>
  )
}

export default Home