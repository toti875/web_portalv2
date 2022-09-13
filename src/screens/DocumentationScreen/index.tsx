import * as React from 'react';
import {
    DocumentationEndpoints,
    DocumentationHeader,
    DocumentationModels,
} from '../../v2/src/components';
import { useDocumentationFetch } from '../../v2/src/hooks';

export const DocumentationScreen: React.FC = () => {
    useDocumentationFetch();

    return (
        <div className="pg-documentation">
            <div className="pg-documentation__content">
                <DocumentationHeader />
                <DocumentationEndpoints />
                <DocumentationModels />
            </div>
        </div>
    );
};
