(function() {var type_impls = {
"assets_common":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MatchesNonFungibles%3CClassId,+InstanceId%3E-for-MatchedConvertedConcreteId%3CClassId,+InstanceId,+MatchClassId,+ConvertClassId,+ConvertInstanceId%3E\" class=\"impl\"><a href=\"#impl-MatchesNonFungibles%3CClassId,+InstanceId%3E-for-MatchedConvertedConcreteId%3CClassId,+InstanceId,+MatchClassId,+ConvertClassId,+ConvertInstanceId%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;ClassId, InstanceId, MatchClassId, ConvertClassId, ConvertInstanceId&gt; MatchesNonFungibles&lt;ClassId, InstanceId&gt; for MatchedConvertedConcreteId&lt;ClassId, InstanceId, MatchClassId, ConvertClassId, ConvertInstanceId&gt;<div class=\"where\">where\n    ClassId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    InstanceId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    MatchClassId: Contains&lt;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>&gt;,\n    ConvertClassId: <a class=\"trait\" href=\"sp_runtime/traits/trait.MaybeEquivalence.html\" title=\"trait sp_runtime::traits::MaybeEquivalence\">MaybeEquivalence</a>&lt;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>, ClassId&gt;,\n    ConvertInstanceId: <a class=\"trait\" href=\"sp_runtime/traits/trait.MaybeEquivalence.html\" title=\"trait sp_runtime::traits::MaybeEquivalence\">MaybeEquivalence</a>&lt;<a class=\"enum\" href=\"staging_xcm/v4/asset/enum.AssetInstance.html\" title=\"enum staging_xcm::v4::asset::AssetInstance\">AssetInstance</a>, InstanceId&gt;,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.matches_nonfungibles\" class=\"method trait-impl\"><a href=\"#method.matches_nonfungibles\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">matches_nonfungibles</a>(a: &amp;<a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Asset.html\" title=\"struct staging_xcm::v4::asset::Asset\">Asset</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.tuple.html\">(ClassId, InstanceId)</a>, Error&gt;</h4></section></div></details>","MatchesNonFungibles<ClassId, InstanceId>","assets_common::TrustBackedAssetsConvertedConcreteId","assets_common::UniquesConvertedConcreteId","assets_common::TrustBackedAssetsAsLocation","assets_common::ForeignAssetsConvertedConcreteId","assets_common::PoolAssetsConvertedConcreteId"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MatchesFungibles%3CAssetId,+Balance%3E-for-MatchedConvertedConcreteId%3CAssetId,+Balance,+MatchAssetId,+ConvertAssetId,+ConvertBalance%3E\" class=\"impl\"><a href=\"#impl-MatchesFungibles%3CAssetId,+Balance%3E-for-MatchedConvertedConcreteId%3CAssetId,+Balance,+MatchAssetId,+ConvertAssetId,+ConvertBalance%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;AssetId, Balance, MatchAssetId, ConvertAssetId, ConvertBalance&gt; MatchesFungibles&lt;AssetId, Balance&gt; for MatchedConvertedConcreteId&lt;AssetId, Balance, MatchAssetId, ConvertAssetId, ConvertBalance&gt;<div class=\"where\">where\n    AssetId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    MatchAssetId: Contains&lt;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>&gt;,\n    ConvertAssetId: <a class=\"trait\" href=\"sp_runtime/traits/trait.MaybeEquivalence.html\" title=\"trait sp_runtime::traits::MaybeEquivalence\">MaybeEquivalence</a>&lt;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>, AssetId&gt;,\n    ConvertBalance: <a class=\"trait\" href=\"sp_runtime/traits/trait.MaybeEquivalence.html\" title=\"trait sp_runtime::traits::MaybeEquivalence\">MaybeEquivalence</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u128.html\">u128</a>, Balance&gt;,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.matches_fungibles\" class=\"method trait-impl\"><a href=\"#method.matches_fungibles\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">matches_fungibles</a>(a: &amp;<a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Asset.html\" title=\"struct staging_xcm::v4::asset::Asset\">Asset</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.tuple.html\">(AssetId, Balance)</a>, Error&gt;</h4></section></div></details>","MatchesFungibles<AssetId, Balance>","assets_common::TrustBackedAssetsConvertedConcreteId","assets_common::UniquesConvertedConcreteId","assets_common::TrustBackedAssetsAsLocation","assets_common::ForeignAssetsConvertedConcreteId","assets_common::PoolAssetsConvertedConcreteId"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AssetConverter%3CAssetId,+Balance,+ConvertAssetId,+ConvertBalance%3E-for-MatchedConvertedConcreteId%3CAssetId,+Balance,+MatchAssetId,+ConvertAssetId,+ConvertBalance%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/assets_common/fungible_conversion.rs.html#71-90\">source</a><a href=\"#impl-AssetConverter%3CAssetId,+Balance,+ConvertAssetId,+ConvertBalance%3E-for-MatchedConvertedConcreteId%3CAssetId,+Balance,+MatchAssetId,+ConvertAssetId,+ConvertBalance%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;AssetId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, MatchAssetId: Contains&lt;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>&gt;, ConvertAssetId: <a class=\"trait\" href=\"sp_runtime/traits/trait.MaybeEquivalence.html\" title=\"trait sp_runtime::traits::MaybeEquivalence\">MaybeEquivalence</a>&lt;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>, AssetId&gt;, ConvertBalance: <a class=\"trait\" href=\"sp_runtime/traits/trait.MaybeEquivalence.html\" title=\"trait sp_runtime::traits::MaybeEquivalence\">MaybeEquivalence</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u128.html\">u128</a>, Balance&gt;&gt; <a class=\"trait\" href=\"assets_common/fungible_conversion/trait.AssetConverter.html\" title=\"trait assets_common::fungible_conversion::AssetConverter\">AssetConverter</a>&lt;AssetId, Balance, ConvertAssetId, ConvertBalance&gt; for MatchedConvertedConcreteId&lt;AssetId, Balance, MatchAssetId, ConvertAssetId, ConvertBalance&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.convert_ref\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/assets_common/fungible_conversion.rs.html#80-89\">source</a><a href=\"#method.convert_ref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"assets_common/fungible_conversion/trait.AssetConverter.html#tymethod.convert_ref\" class=\"fn\">convert_ref</a>(\n    value: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.tuple.html\">(AssetId, Balance)</a>&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Asset.html\" title=\"struct staging_xcm::v4::asset::Asset\">Asset</a>, <a class=\"enum\" href=\"assets_common/runtime_api/enum.FungiblesAccessError.html\" title=\"enum assets_common::runtime_api::FungiblesAccessError\">FungiblesAccessError</a>&gt;</h4></section></div></details>","AssetConverter<AssetId, Balance, ConvertAssetId, ConvertBalance>","assets_common::TrustBackedAssetsConvertedConcreteId","assets_common::UniquesConvertedConcreteId","assets_common::TrustBackedAssetsAsLocation","assets_common::ForeignAssetsConvertedConcreteId","assets_common::PoolAssetsConvertedConcreteId"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MatchesLocation%3CAssetId,+Balance,+MatchAssetId,+ConvertAssetId,+ConvertBalance%3E-for-MatchedConvertedConcreteId%3CAssetId,+Balance,+MatchAssetId,+ConvertAssetId,+ConvertBalance%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/assets_common/fungible_conversion.rs.html#92-104\">source</a><a href=\"#impl-MatchesLocation%3CAssetId,+Balance,+MatchAssetId,+ConvertAssetId,+ConvertBalance%3E-for-MatchedConvertedConcreteId%3CAssetId,+Balance,+MatchAssetId,+ConvertAssetId,+ConvertBalance%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;AssetId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, MatchAssetId: Contains&lt;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>&gt;, ConvertAssetId: <a class=\"trait\" href=\"sp_runtime/traits/trait.MaybeEquivalence.html\" title=\"trait sp_runtime::traits::MaybeEquivalence\">MaybeEquivalence</a>&lt;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>, AssetId&gt;, ConvertBalance: <a class=\"trait\" href=\"sp_runtime/traits/trait.MaybeEquivalence.html\" title=\"trait sp_runtime::traits::MaybeEquivalence\">MaybeEquivalence</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u128.html\">u128</a>, Balance&gt;&gt; <a class=\"trait\" href=\"assets_common/fungible_conversion/trait.MatchesLocation.html\" title=\"trait assets_common::fungible_conversion::MatchesLocation\">MatchesLocation</a>&lt;AssetId, Balance, MatchAssetId, ConvertAssetId, ConvertBalance&gt; for MatchedConvertedConcreteId&lt;AssetId, Balance, MatchAssetId, ConvertAssetId, ConvertBalance&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.contains\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/assets_common/fungible_conversion.rs.html#101-103\">source</a><a href=\"#method.contains\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"assets_common/fungible_conversion/trait.MatchesLocation.html#tymethod.contains\" class=\"fn\">contains</a>(location: &amp;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></div></details>","MatchesLocation<AssetId, Balance, MatchAssetId, ConvertAssetId, ConvertBalance>","assets_common::TrustBackedAssetsConvertedConcreteId","assets_common::UniquesConvertedConcreteId","assets_common::TrustBackedAssetsAsLocation","assets_common::ForeignAssetsConvertedConcreteId","assets_common::PoolAssetsConvertedConcreteId"]],
"penpal_runtime":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MatchesNonFungibles%3CClassId,+InstanceId%3E-for-MatchedConvertedConcreteId%3CClassId,+InstanceId,+MatchClassId,+ConvertClassId,+ConvertInstanceId%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm_builder/asset_conversion.rs.html#133-140\">source</a><a href=\"#impl-MatchesNonFungibles%3CClassId,+InstanceId%3E-for-MatchedConvertedConcreteId%3CClassId,+InstanceId,+MatchClassId,+ConvertClassId,+ConvertInstanceId%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;ClassId, InstanceId, MatchClassId, ConvertClassId, ConvertInstanceId&gt; <a class=\"trait\" href=\"staging_xcm_executor/traits/token_matching/trait.MatchesNonFungibles.html\" title=\"trait staging_xcm_executor::traits::token_matching::MatchesNonFungibles\">MatchesNonFungibles</a>&lt;ClassId, InstanceId&gt; for <a class=\"struct\" href=\"staging_xcm_builder/asset_conversion/struct.MatchedConvertedConcreteId.html\" title=\"struct staging_xcm_builder::asset_conversion::MatchedConvertedConcreteId\">MatchedConvertedConcreteId</a>&lt;ClassId, InstanceId, MatchClassId, ConvertClassId, ConvertInstanceId&gt;<div class=\"where\">where\n    ClassId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    InstanceId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    MatchClassId: <a class=\"trait\" href=\"frame_support/traits/members/trait.Contains.html\" title=\"trait frame_support::traits::members::Contains\">Contains</a>&lt;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>&gt;,\n    ConvertClassId: <a class=\"trait\" href=\"sp_runtime/traits/trait.MaybeEquivalence.html\" title=\"trait sp_runtime::traits::MaybeEquivalence\">MaybeEquivalence</a>&lt;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>, ClassId&gt;,\n    ConvertInstanceId: <a class=\"trait\" href=\"sp_runtime/traits/trait.MaybeEquivalence.html\" title=\"trait sp_runtime::traits::MaybeEquivalence\">MaybeEquivalence</a>&lt;<a class=\"enum\" href=\"staging_xcm/v4/asset/enum.AssetInstance.html\" title=\"enum staging_xcm::v4::asset::AssetInstance\">AssetInstance</a>, InstanceId&gt;,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.matches_nonfungibles\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm_builder/asset_conversion.rs.html#142\">source</a><a href=\"#method.matches_nonfungibles\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"staging_xcm_executor/traits/token_matching/trait.MatchesNonFungibles.html#tymethod.matches_nonfungibles\" class=\"fn\">matches_nonfungibles</a>(a: &amp;<a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Asset.html\" title=\"struct staging_xcm::v4::asset::Asset\">Asset</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.tuple.html\">(ClassId, InstanceId)</a>, <a class=\"enum\" href=\"staging_xcm_executor/traits/token_matching/enum.Error.html\" title=\"enum staging_xcm_executor::traits::token_matching::Error\">Error</a>&gt;</h4></section></div></details>","MatchesNonFungibles<ClassId, InstanceId>","penpal_runtime::xcm_config::ForeignAssetsConvertedConcreteId"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MatchesFungibles%3CAssetId,+Balance%3E-for-MatchedConvertedConcreteId%3CAssetId,+Balance,+MatchAssetId,+ConvertAssetId,+ConvertBalance%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm_builder/asset_conversion.rs.html#113-120\">source</a><a href=\"#impl-MatchesFungibles%3CAssetId,+Balance%3E-for-MatchedConvertedConcreteId%3CAssetId,+Balance,+MatchAssetId,+ConvertAssetId,+ConvertBalance%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;AssetId, Balance, MatchAssetId, ConvertAssetId, ConvertBalance&gt; <a class=\"trait\" href=\"staging_xcm_executor/traits/token_matching/trait.MatchesFungibles.html\" title=\"trait staging_xcm_executor::traits::token_matching::MatchesFungibles\">MatchesFungibles</a>&lt;AssetId, Balance&gt; for <a class=\"struct\" href=\"staging_xcm_builder/asset_conversion/struct.MatchedConvertedConcreteId.html\" title=\"struct staging_xcm_builder::asset_conversion::MatchedConvertedConcreteId\">MatchedConvertedConcreteId</a>&lt;AssetId, Balance, MatchAssetId, ConvertAssetId, ConvertBalance&gt;<div class=\"where\">where\n    AssetId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    MatchAssetId: <a class=\"trait\" href=\"frame_support/traits/members/trait.Contains.html\" title=\"trait frame_support::traits::members::Contains\">Contains</a>&lt;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>&gt;,\n    ConvertAssetId: <a class=\"trait\" href=\"sp_runtime/traits/trait.MaybeEquivalence.html\" title=\"trait sp_runtime::traits::MaybeEquivalence\">MaybeEquivalence</a>&lt;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>, AssetId&gt;,\n    ConvertBalance: <a class=\"trait\" href=\"sp_runtime/traits/trait.MaybeEquivalence.html\" title=\"trait sp_runtime::traits::MaybeEquivalence\">MaybeEquivalence</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u128.html\">u128</a>, Balance&gt;,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.matches_fungibles\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm_builder/asset_conversion.rs.html#122\">source</a><a href=\"#method.matches_fungibles\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"staging_xcm_executor/traits/token_matching/trait.MatchesFungibles.html#tymethod.matches_fungibles\" class=\"fn\">matches_fungibles</a>(a: &amp;<a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Asset.html\" title=\"struct staging_xcm::v4::asset::Asset\">Asset</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.tuple.html\">(AssetId, Balance)</a>, <a class=\"enum\" href=\"staging_xcm_executor/traits/token_matching/enum.Error.html\" title=\"enum staging_xcm_executor::traits::token_matching::Error\">Error</a>&gt;</h4></section></div></details>","MatchesFungibles<AssetId, Balance>","penpal_runtime::xcm_config::ForeignAssetsConvertedConcreteId"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MatchesLocation%3CAssetId,+Balance,+MatchAssetId,+ConvertAssetId,+ConvertBalance%3E-for-MatchedConvertedConcreteId%3CAssetId,+Balance,+MatchAssetId,+ConvertAssetId,+ConvertBalance%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/assets_common/fungible_conversion.rs.html#92-99\">source</a><a href=\"#impl-MatchesLocation%3CAssetId,+Balance,+MatchAssetId,+ConvertAssetId,+ConvertBalance%3E-for-MatchedConvertedConcreteId%3CAssetId,+Balance,+MatchAssetId,+ConvertAssetId,+ConvertBalance%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;AssetId, Balance, MatchAssetId, ConvertAssetId, ConvertBalance&gt; <a class=\"trait\" href=\"assets_common/fungible_conversion/trait.MatchesLocation.html\" title=\"trait assets_common::fungible_conversion::MatchesLocation\">MatchesLocation</a>&lt;AssetId, Balance, MatchAssetId, ConvertAssetId, ConvertBalance&gt; for <a class=\"struct\" href=\"staging_xcm_builder/asset_conversion/struct.MatchedConvertedConcreteId.html\" title=\"struct staging_xcm_builder::asset_conversion::MatchedConvertedConcreteId\">MatchedConvertedConcreteId</a>&lt;AssetId, Balance, MatchAssetId, ConvertAssetId, ConvertBalance&gt;<div class=\"where\">where\n    AssetId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    MatchAssetId: <a class=\"trait\" href=\"frame_support/traits/members/trait.Contains.html\" title=\"trait frame_support::traits::members::Contains\">Contains</a>&lt;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>&gt;,\n    ConvertAssetId: <a class=\"trait\" href=\"sp_runtime/traits/trait.MaybeEquivalence.html\" title=\"trait sp_runtime::traits::MaybeEquivalence\">MaybeEquivalence</a>&lt;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>, AssetId&gt;,\n    ConvertBalance: <a class=\"trait\" href=\"sp_runtime/traits/trait.MaybeEquivalence.html\" title=\"trait sp_runtime::traits::MaybeEquivalence\">MaybeEquivalence</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u128.html\">u128</a>, Balance&gt;,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.contains\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/assets_common/fungible_conversion.rs.html#101\">source</a><a href=\"#method.contains\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"assets_common/fungible_conversion/trait.MatchesLocation.html#tymethod.contains\" class=\"fn\">contains</a>(location: &amp;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></div></details>","MatchesLocation<AssetId, Balance, MatchAssetId, ConvertAssetId, ConvertBalance>","penpal_runtime::xcm_config::ForeignAssetsConvertedConcreteId"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AssetConverter%3CAssetId,+Balance,+ConvertAssetId,+ConvertBalance%3E-for-MatchedConvertedConcreteId%3CAssetId,+Balance,+MatchAssetId,+ConvertAssetId,+ConvertBalance%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/assets_common/fungible_conversion.rs.html#71-78\">source</a><a href=\"#impl-AssetConverter%3CAssetId,+Balance,+ConvertAssetId,+ConvertBalance%3E-for-MatchedConvertedConcreteId%3CAssetId,+Balance,+MatchAssetId,+ConvertAssetId,+ConvertBalance%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;AssetId, Balance, MatchAssetId, ConvertAssetId, ConvertBalance&gt; <a class=\"trait\" href=\"assets_common/fungible_conversion/trait.AssetConverter.html\" title=\"trait assets_common::fungible_conversion::AssetConverter\">AssetConverter</a>&lt;AssetId, Balance, ConvertAssetId, ConvertBalance&gt; for <a class=\"struct\" href=\"staging_xcm_builder/asset_conversion/struct.MatchedConvertedConcreteId.html\" title=\"struct staging_xcm_builder::asset_conversion::MatchedConvertedConcreteId\">MatchedConvertedConcreteId</a>&lt;AssetId, Balance, MatchAssetId, ConvertAssetId, ConvertBalance&gt;<div class=\"where\">where\n    AssetId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    MatchAssetId: <a class=\"trait\" href=\"frame_support/traits/members/trait.Contains.html\" title=\"trait frame_support::traits::members::Contains\">Contains</a>&lt;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>&gt;,\n    ConvertAssetId: <a class=\"trait\" href=\"sp_runtime/traits/trait.MaybeEquivalence.html\" title=\"trait sp_runtime::traits::MaybeEquivalence\">MaybeEquivalence</a>&lt;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>, AssetId&gt;,\n    ConvertBalance: <a class=\"trait\" href=\"sp_runtime/traits/trait.MaybeEquivalence.html\" title=\"trait sp_runtime::traits::MaybeEquivalence\">MaybeEquivalence</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u128.html\">u128</a>, Balance&gt;,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.convert_ref\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/assets_common/fungible_conversion.rs.html#80\">source</a><a href=\"#method.convert_ref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"assets_common/fungible_conversion/trait.AssetConverter.html#tymethod.convert_ref\" class=\"fn\">convert_ref</a>(\n    value: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.tuple.html\">(AssetId, Balance)</a>&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Asset.html\" title=\"struct staging_xcm::v4::asset::Asset\">Asset</a>, <a class=\"enum\" href=\"assets_common/runtime_api/enum.FungiblesAccessError.html\" title=\"enum assets_common::runtime_api::FungiblesAccessError\">FungiblesAccessError</a>&gt;</h4></section></div></details>","AssetConverter<AssetId, Balance, ConvertAssetId, ConvertBalance>","penpal_runtime::xcm_config::ForeignAssetsConvertedConcreteId"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()