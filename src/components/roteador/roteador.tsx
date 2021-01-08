import { useHistory, useParams } from 'react-router-dom';
import { SWAPIEndpoint } from '../../api/generic-api';
import { Detail } from '../details/detail';
import { Lista } from '../lista/lista';
import { People } from '../../api/schemas/people';
import { Film } from '../../api/schemas/films';
import { Vehicle } from '../../api/schemas/vehicles';
import { Planet } from '../../api/schemas/planets';
import { Specie } from '../../api/schemas/species';
import { Starship } from '../../api/schemas/starships';
import TelaErro from '../erro/tela-erro';

interface RoteadorProps {
	list?: boolean;
}

interface URLParam {
	controller: SWAPIEndpoint;
	page?: string;
	id?: string;
}

export const Roteador = (props: RoteadorProps) => {
	const { controller, page, id } = useParams<URLParam>();
	const { list } = props;
	const pageNumber = page ? parseInt(page) : 0;
	const idNumber = id ? parseInt(id) : 0;
	const history = useHistory();
	switch (controller) {
		case 'people':
			return list ? (
				<Lista<People> controller={controller} page={pageNumber} />
			) : (
				<Detail controller={controller} id={idNumber} />
			);
		case 'films':
			return list ? (
				<Lista<Film> controller={controller} page={pageNumber} />
			) : (
				<Detail controller={controller} id={idNumber} />
			);
		case 'vehicles':
			return list ? (
				<Lista<Vehicle> page={pageNumber} controller={controller} />
			) : (
				<Detail controller={controller} id={idNumber} />
			);
		case 'planets':
			return list ? (
				<Lista<Planet> page={pageNumber} controller={controller} />
			) : (
				<Detail controller={controller} id={idNumber} />
			);
		case 'species':
			return list ? (
				<Lista<Specie> page={pageNumber} controller={controller} />
			) : (
				<Detail controller={controller} id={idNumber} />
			);
		case 'starships':
			return list ? (
				<Lista<Starship> page={pageNumber} controller={controller} />
			) : (
				<Detail controller={controller} id={idNumber} />
			);
		default: {
			history.push('/erro/Rota não encontrada');
			return <TelaErro />;
		}
	}
};
