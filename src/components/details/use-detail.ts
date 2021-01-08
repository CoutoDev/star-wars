import { useMemo } from 'react';
import { genericController, SWAPIEndpoint } from '../../api/generic-api';
import { useAsync } from '../../common/hooks/use-async';
import { AsyncReturnType } from '../../common/hooks/use-async';

export const useDetail = <T>(
	id: number,
	controllerName: SWAPIEndpoint
): AsyncReturnType<T> => {
	const controller = useMemo(()=> genericController<T>(controllerName).getById(id), [controllerName, id]);
	const { error, isLoading, result } = useAsync<T>(controller, [controllerName,id]);

	return { error, result, isLoading };
};
