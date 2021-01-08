import { Button, CircularProgress, Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { getDetailData } from '../../api/controller-defs';
import { SWAPIEndpoint } from '../../api/generic-api';
import { GenericSchema } from '../../api/schemas/generic-schema';
import { Field } from './field';
import { useDetail } from './use-detail';

interface DetailProps {
	id: number;
	controller: SWAPIEndpoint;
}

export const Detail = <T extends GenericSchema> (props: DetailProps) => {
	const { id, controller } = props;
	const { isLoading, result, error } = useDetail<T>(id, controller);
	const columns = getDetailData(controller);
	const history = useHistory();

	if (isLoading)
		return (
			<div className="centralizado">
				<CircularProgress />
			</div>
		);
	if (!result) return null;

	const handleVoltar = ()=> {
		history.goBack();
	}

	return (
		<Grid container direction={'column'} spacing={2} alignItems={'stretch'}>
			<Grid>
				{Object.entries(result)
					.filter((item) => {
						const [key] = item;
						return columns?.find((field) => field === key);
					})
					.map((item) => {
						const [key, value] = item;
						return <Field nome={key} valor={value} />;
					})}
			</Grid>
			<Grid>
				<Button variant={'outlined'} onClick={handleVoltar}>Voltar</Button>
			</Grid>
		</Grid>
	);
};
