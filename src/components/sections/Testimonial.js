import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Our Mission & Plan',
    paragraph: 'We want to make this world better than we found it, our mission is to guide, advice and support projects trough a platform where anyone can be an active. Anyone can be part of this, we developed an internal and external system where you can buy WAPs to support peoples different projects'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="">
                  <p className="text-sm mb-0">
                    <h4>1. Founding as a Platform</h4>
                    Trough our platform you can support people's projects with the internal system we have. You support them by acquiring WAPs, we email you the progress for the different projects that you support so you can have everything updated.
                      </p>
                </div>

              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="">
                  <p className="text-sm mb-0">
                    <h4>2. WAPs as NFTs</h4>
                    As seen on the last step. We made it happen. NFTs gave us the accesibility to make the entire platform tokenization. With this system we can transfer you different internal stock actions 'WAPs' so you can support the projects that we are supporting. Also, you can exchange different WAPs coins with other users, this means opportunities for everyone.
                      </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="">
                  <p className="text-sm mb-0">
                  <h4>3. WAPs as Cryptocurrency</h4>
                    We delivered a huge quantity of WAPs and we found the way to make it a Cryptocurrency. Yes, it is supported by BlockChain it means that you can see every transaction that is made in our platform and out of it.
                      </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;