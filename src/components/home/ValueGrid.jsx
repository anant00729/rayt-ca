import { HeadlineSplit } from '../text/Highlights';
import {
  GridWrap, GridHeader, GridEyebrow, GridHeadline, GridSubtitle, GridLink,
  Cells, Cell, CellIcon, CellTitle, CellDesc,
} from './ValueGrid.style';

export default function ValueGrid({ data }) {
  return (
    <GridWrap>
      <GridHeader>
        <div>
          <GridEyebrow>{data.eyebrow}</GridEyebrow>
          <GridHeadline>
            <HeadlineSplit data={data.headline} variant="marker" />
          </GridHeadline>
          <GridSubtitle>{data.subtitle}</GridSubtitle>
        </div>
        <GridLink href={data.ctaHref}>{data.ctaText} →</GridLink>
      </GridHeader>

      <Cells>
        {data.cells.map((cell) => (
          <Cell key={cell.title}>
            <CellIcon aria-hidden>{cell.icon}</CellIcon>
            <CellTitle>{cell.title}</CellTitle>
            <CellDesc>{cell.description}</CellDesc>
          </Cell>
        ))}
      </Cells>
    </GridWrap>
  );
}
