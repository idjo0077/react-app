import Rectangle40 from '../../assets/images/Rectangle 40.jpg';
import './TableSquare.css'

export default function TableSquare() {
	return(
		<section className="table-square">
		<img src={Rectangle40} alt="Painting"/>
		<div className="table-square-text">
			<h2>TIDIGARE UTSTÄLLNINGAR</h2>
			<table>
				<tbody>
					<tr>
						<th>2021</th>
						<td>Modern Gallery Stockholm</td>
					</tr>
					<tr>
						<th>2020</th>
						<td>Kunsthalle Munich</td> 
					</tr>
					<tr>
						<th>2018</th>
						<td>Kate Vass Galerie Zurich</td>
					</tr>
					<tr>
						<th>2015</th>
						<td>Galleri OSs Umeå</td>
					</tr>
					<tr>
						<th>2014</th>
						<td>Galleri Helle Knudsen Stockholm</td>
					</tr>
				</tbody>
			</table>
		</div>			
		</section>
	)
}