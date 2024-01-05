import React, { FC } from "react";
import { FormattedMessage } from "react-intl";
import { CARD_TYPE } from "../shared/constants";

interface AgendaCardProps {
  type: CARD_TYPE;
  maxSpeakersCount: number;
}

export const AgendaCard: FC<AgendaCardProps> = ({ type, maxSpeakersCount }) => {
  return (
    <div className="card-container">
      <div className="card-description">
        <FormattedMessage id="message.cardDescription" />,
      </div>
      <div className="speakers-container"></div>
    </div>
  );
};
