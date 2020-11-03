import React, { Fragment } from 'react'
import Menu from '@material-ui/core/Menu'

const EgretMenu = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const children = React.Children.toArray(props.children)
  let { horizontalPosition = 'right', isBlockListOpen = false, onExited } = props
  const childArray = isBlockListOpen
    ? props.children
    : React.Children.toArray(children[0].props.children)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const onItemClick = (index) => {
    if (isBlockListOpen) return

    // Do not close menu for Block List
    if (index === 2) return

    handleClose()
  }

  return (
    <Fragment>
      <div
        style={{ display: 'inline-block' }}
        aria-owns={anchorEl ? 'simple-menu' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        {props.menuButton}
      </div>
      <Menu
        elevation={8}
        getContentAnchorEl={null}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        onExited={onExited}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: horizontalPosition,
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: horizontalPosition,
        }}
        PaperProps={{
          style: {
            width: 420,
            borderRadius: 8,
            marginTop: 20,
            padding: '12px 0',
            ...(isBlockListOpen
              ? {
                  maxHeight: 550,
                  padding: '16px 24px',
                }
              : {}),
          },
        }}
      >
        {childArray.map((child, index) => (
          <div onClick={() => onItemClick(index)} key={index}>
            {child}
          </div>
        ))}
      </Menu>
    </Fragment>
  )
}

export default EgretMenu
