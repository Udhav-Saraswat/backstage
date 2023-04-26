/*
 * Copyright 2023 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { CompoundEntityRef, Entity } from '@backstage/catalog-model';
import { Box, Theme, Tooltip, makeStyles } from '@material-ui/core';
import React from 'react';
import { useEntityPresentation } from '../../apis';

/**
 * The available style class keys for {@link EntityName}, under the name
 * "CatalogReactEntityName".
 *
 * @public
 */
export type CatalogReactEntityNameClassKey = 'root' | 'icon';

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      display: 'inline-flex',
      alignItems: 'center',
    },
    icon: {
      marginLeft: theme.spacing(0.5),
      color: theme.palette.text.secondary,
      lineHeight: 0,
    },
  }),
  { name: 'CatalogReactEntityName' },
);

/**
 * Props for {@link EntityName}.
 *
 * @public
 */
export type EntityNameProps = {
  entityRef: Entity | CompoundEntityRef | string;
  variant?: string;
  defaultKind?: string;
  defaultNamespace?: string;
};

/**
 * Shows a nice representation of a reference to an entity.
 *
 * @public
 */
export const EntityName = (props: EntityNameProps): JSX.Element => {
  const { entityRef, variant, defaultKind, defaultNamespace } = props;

  const classes = useStyles();
  const { primaryTitle, secondaryTitle, Icon } = useEntityPresentation(
    entityRef,
    { variant: 'icon', defaultKind, defaultNamespace },
  );

  // The innermost "body" content
  let content = <>{primaryTitle}</>;

  // Optionally, an icon and wrapper around them both
  if (Icon && variant !== 'simple') {
    content = (
      <Box component="span" className={classes.root}>
        {content}
        <Box component="span" className={classes.icon}>
          <Icon fontSize="inherit" />
        </Box>
      </Box>
    );
  }

  // Optionally, a tooltip as the outermost layer
  if (secondaryTitle) {
    content = (
      <Tooltip enterDelay={1500} title={secondaryTitle}>
        {content}
      </Tooltip>
    );
  }

  return content;
};
