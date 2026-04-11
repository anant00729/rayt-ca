import { HeadlineSplit } from '../text/Highlights';
import Button from '../ui/Button';
import { VALUE_GRID_ICONS } from '../icons/valueGridIcons';
import {
  GridWrap, GridHeader, GridEyebrow, GridHeadline, GridSubtitle,
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
        <Button variant="ghostLink" to={data.ctaHref} icon="→">
          {data.ctaText}
        </Button>
      </GridHeader>

      <Cells>
        {data.cells.map((cell) => (
          <Cell key={cell.title}>
            <CellIcon>
              <img src={VALUE_GRID_ICONS[cell.iconKey]} alt="" width={22} height={22} />
            </CellIcon>
            <CellTitle>{cell.title}</CellTitle>
            <CellDesc>{cell.description}</CellDesc>
          </Cell>
        ))}
      </Cells>
    </GridWrap>
  );
}
