import React from 'react';
import PropTypes from 'prop-types';
import UsingKeyboardProvider from './UsingKeyboardContext';
import TypographyProvider, {
  TypographyProviderProps,
} from './TypographyContext';
import PortalContextProvider, {PortalContextValues} from './PortalContext';

type LeafyGreenProviderProps = {
  children: React.ReactNode;
  modalPortalContainer?: PortalContextValues['modal'];
  popoverPortalContainer?: PortalContextValues['popover'];
} & TypographyProviderProps;

function LeafyGreenProvider({
  children,
  baseFontSize,
  modalPortalContainer,
  popoverPortalContainer,
}: LeafyGreenProviderProps) {
  return (
    <UsingKeyboardProvider>
      <PortalContextProvider modal={modalPortalContainer} popover={popoverPortalContainer}>
        <TypographyProvider baseFontSize={baseFontSize}>
          {children}
        </TypographyProvider>
      </PortalContextProvider>
    </UsingKeyboardProvider>
  );
}

LeafyGreenProvider.displayName = 'LeafyGreenProvider';

LeafyGreenProvider.propTypes = { children: PropTypes.node };

export default LeafyGreenProvider;
