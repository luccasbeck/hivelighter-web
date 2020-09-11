import React, { Fragment } from 'react'
import {
  Card,
  TextField,
  InputAdornment,
  Icon,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  Slider,
  Checkbox,
  Fab,
  Button,
  // eslint-disable-next-line no-unused-vars
  IconButton,
  Hidden,
} from '@material-ui/core'

import Rating from '@material-ui/lab/Rating'

const ShopSidenav = ({
  query,
  categories,
  brands,
  multilevel,
  categoryList,
  brandList,
  ratingList,
  shipping,
  sliderRange,
  toggleSidenav,
  handleSearch,
  handleMultilevelChange,
  handleSliderChange,
  handleCategoryChange,
  handleBrandChange,
  handleRatingClick,
  handleFreeShippingClick,
  handleClearAllFilter,
}) => {
  return (
    <Fragment>
      <div className="pl-16 flex flex-middle mb-16">
        <TextField
          className="bg-paper flex-grow-1 mr-16"
          margin="none"
          name="query"
          variant="outlined"
          placeholder="Search here..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Icon fontSize="small">search</Icon>
              </InputAdornment>
            ),
          }}
          inputProps={{
            style: {
              padding: '10px',
            },
          }}
          fullWidth
        ></TextField>
        <Hidden smUp>
          <Icon onClick={toggleSidenav}>clear</Icon>
        </Hidden>
      </div>
      <div className="px-16">
        <Card elevation={3} className="p-16 mb-16">
          <h6 className="m-0 mb-16">Multi Level</h6>
          <FormControl component="fieldset" className="w-100">
            <RadioGroup
              aria-label="status"
              name="status"
              value={multilevel}
              onChange={handleMultilevelChange}
            >
              <FormControlLabel
                className="h-32"
                value="0,10"
                control={<Radio color="secondary" />}
                label="<$10"
                labelPlacement="end"
              />
              <FormControlLabel
                className="h-32"
                value="10,100"
                control={<Radio color="secondary" />}
                label="$10-$100"
                labelPlacement="end"
              />
              <FormControlLabel
                className="h-32"
                value="100,500"
                control={<Radio color="secondary" />}
                label="$100-$500"
                labelPlacement="end"
              />
              <FormControlLabel
                className="h-32"
                value="500"
                control={<Radio color="secondary" />}
                label=">$500"
                labelPlacement="end"
              />
              <FormControlLabel
                className="h-32"
                value="all"
                control={<Radio color="secondary" />}
                label="All"
                labelPlacement="end"
              />
            </RadioGroup>
          </FormControl>
        </Card>

        <Card elevation={3} className="p-16 mb-16">
          <div className="flex flex-space-between flex-middle  mb-16">
            <h5 className="m-0">Slider</h5>
            <span className="text-muted">
              ${sliderRange[0] * 10} - ${sliderRange[1] * 10}
            </span>
          </div>
          <Slider
            value={sliderRange}
            onChange={handleSliderChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            valueLabelFormat={(x) => x * 10}
          />
        </Card>

        <Card elevation={3} className="position-relative p-16 mb-16">
          <h5 className="m-0 mb-16">Category</h5>
          {categoryList.map((category) => (
            <div key={category.title} className="flex flex-middle flex-space-between">
              <FormControlLabel
                className="flex-grow-1"
                name={category.title}
                onChange={handleCategoryChange}
                control={<Checkbox checked={categories.includes(category.title)} />}
                label={<span className="capitalize">{category.title}</span>}
              />
              <small className="badge bg-light-primary text-primary">
                {category.product}
              </small>
            </div>
          ))}
        </Card>

        <Card elevation={3} className="position-relative p-16 mb-16">
          <h5 className="m-0 mb-16">Brands</h5>
          <TextField
            className="mb-8"
            variant="outlined"
            placeholder="Search here..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon fontSize="small">search</Icon>
                </InputAdornment>
              ),
            }}
            inputProps={{
              style: {
                padding: '10px',
              },
            }}
            fullWidth
          ></TextField>

          {brandList.map((brand) => (
            <div key={brand.title} className="flex flex-middle flex-space-between">
              <FormControlLabel
                className="flex-grow-1"
                name={brand.title}
                onChange={handleBrandChange}
                control={<Checkbox checked={brands.includes(brand.title)} />}
                label={brand.title}
              />
              <small className="badge bg-light-primary text-primary">
                {brand.product}
              </small>
            </div>
          ))}
        </Card>

        <Card elevation={3} className="position-relative p-16 mb-16">
          <h5 className="m-0 mb-16">Rating</h5>
          {ratingList.map((rating) => (
            <div
              key={rating.rate}
              value={rating.rate}
              className="flex flex-middle flex-space-between cursor-pointer pb-4"
              onClick={() => handleRatingClick(rating.rate)}
            >
              <Rating
                size="small"
                name="half-rating"
                value={rating.rate}
                precision={0.5}
                readOnly={true}
              />
              <small className="badge bg-light-primary text-primary">
                {rating.product}
              </small>
            </div>
          ))}
        </Card>

        <Card
          elevation={3}
          className="position-relative p-16 mb-16 flex flex-space-between flex-middle"
        >
          <h5 className="m-0">Toggle</h5>
          <Fab
            className="px-12 box-shadow-none"
            variant="extended"
            color={shipping ? 'primary' : 'inherit'}
            size="small"
            onClick={handleFreeShippingClick}
          >
            <small className="mr-4">Free Shipping</small>
            <Icon>add</Icon>
          </Fab>
        </Card>

        <Button
          className="w-100"
          variant="contained"
          color="primary"
          onClick={handleClearAllFilter}
        >
          Clear All Filteres
        </Button>
      </div>
    </Fragment>
  )
}

export default ShopSidenav
