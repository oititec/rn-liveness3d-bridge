//
//  PermissionCustomView.swift
//  SampleFaceCaptcha
//
//  Created by Vitor Souza on 13/10/22.
//  Copyright © 2022 Oiti. All rights reserved.
//

import Foundation
import FaceCaptcha

class PermissionCustomView: UIView, CustomPermissionView {
    // MARK: - Outlets

    @IBOutlet weak var view: UIView!
    @IBOutlet weak var backButton: UIButton!
    @IBOutlet weak var continueButton: UIButton!

    // MARK: - Lifecycle

    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
        loadFromNib()
    }

    override init(frame: CGRect) {
        super.init(frame: frame)
        loadFromNib()
    }

    // MARK: - Methods

    private func loadFromNib() {
        let bundle = Bundle(for: type(of: self))
        bundle.loadNibNamed("\(type(of: self))", owner: self, options: nil)
        view.frame = bounds
        view.autoresizingMask = [.flexibleWidth, .flexibleHeight]
        addSubview(view)
    }
}
