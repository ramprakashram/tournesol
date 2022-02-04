import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChoicesFilterSection } from 'src/components';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

function SafeFilter(props: Props) {
  const { t } = useTranslation();

  const safeChoice = {
    true: t('filter.unsafe'),
  };

  return (
    <ChoicesFilterSection
      title={t('filter.safeTile')}
      multipleChoice
      choices={safeChoice}
      {...props}
    ></ChoicesFilterSection>
  );
}

export default SafeFilter;