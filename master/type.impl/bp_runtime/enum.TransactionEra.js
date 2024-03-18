(function() {var type_impls = {
"bp_runtime":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TransactionEra%3CBlockNumber,+BlockHash%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bp_runtime/lib.rs.html#164-208\">source</a><a href=\"#impl-TransactionEra%3CBlockNumber,+BlockHash%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;BlockNumber: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"sp_arithmetic/traits/trait.UniqueSaturatedInto.html\" title=\"trait sp_arithmetic::traits::UniqueSaturatedInto\">UniqueSaturatedInto</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u64.html\">u64</a>&gt;, BlockHash: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"enum\" href=\"bp_runtime/enum.TransactionEra.html\" title=\"enum bp_runtime::TransactionEra\">TransactionEra</a>&lt;BlockNumber, BlockHash&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/bp_runtime/lib.rs.html#168-175\">source</a><h4 class=\"code-header\">pub fn <a href=\"bp_runtime/enum.TransactionEra.html#tymethod.new\" class=\"fn\">new</a>(\n    best_block_id: <a class=\"struct\" href=\"bp_runtime/struct.HeaderId.html\" title=\"struct bp_runtime::HeaderId\">HeaderId</a>&lt;BlockHash, BlockNumber&gt;,\n    mortality_period: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>&gt;\n) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Prepare transaction era, based on mortality period and current best block number.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.immortal\" class=\"method\"><a class=\"src rightside\" href=\"src/bp_runtime/lib.rs.html#178-180\">source</a><h4 class=\"code-header\">pub fn <a href=\"bp_runtime/enum.TransactionEra.html#tymethod.immortal\" class=\"fn\">immortal</a>() -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Create new immortal transaction era.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.mortality_period\" class=\"method\"><a class=\"src rightside\" href=\"src/bp_runtime/lib.rs.html#183-188\">source</a><h4 class=\"code-header\">pub fn <a href=\"bp_runtime/enum.TransactionEra.html#tymethod.mortality_period\" class=\"fn\">mortality_period</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Returns mortality period if transaction is mortal.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.frame_era\" class=\"method\"><a class=\"src rightside\" href=\"src/bp_runtime/lib.rs.html#191-199\">source</a><h4 class=\"code-header\">pub fn <a href=\"bp_runtime/enum.TransactionEra.html#tymethod.frame_era\" class=\"fn\">frame_era</a>(&amp;self) -&gt; Era</h4></section></summary><div class=\"docblock\"><p>Returns era that is used by FRAME-based runtimes.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.signed_payload\" class=\"method\"><a class=\"src rightside\" href=\"src/bp_runtime/lib.rs.html#202-207\">source</a><h4 class=\"code-header\">pub fn <a href=\"bp_runtime/enum.TransactionEra.html#tymethod.signed_payload\" class=\"fn\">signed_payload</a>(&amp;self, genesis_hash: BlockHash) -&gt; BlockHash</h4></section></summary><div class=\"docblock\"><p>Returns header hash that needs to be included in the signature payload.</p>\n</div></details></div></details>",0,"bp_runtime::chain::TransactionEraOf"],["<section id=\"impl-StructuralPartialEq-for-TransactionEra%3CBlockNumber,+BlockHash%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bp_runtime/lib.rs.html#156\">source</a><a href=\"#impl-StructuralPartialEq-for-TransactionEra%3CBlockNumber,+BlockHash%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;BlockNumber, BlockHash&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"enum\" href=\"bp_runtime/enum.TransactionEra.html\" title=\"enum bp_runtime::TransactionEra\">TransactionEra</a>&lt;BlockNumber, BlockHash&gt;</h3></section>","StructuralPartialEq","bp_runtime::chain::TransactionEraOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-TransactionEra%3CBlockNumber,+BlockHash%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bp_runtime/lib.rs.html#156\">source</a><a href=\"#impl-PartialEq-for-TransactionEra%3CBlockNumber,+BlockHash%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;BlockNumber: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>, BlockHash: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"enum\" href=\"bp_runtime/enum.TransactionEra.html\" title=\"enum bp_runtime::TransactionEra\">TransactionEra</a>&lt;BlockNumber, BlockHash&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bp_runtime/lib.rs.html#156\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"enum\" href=\"bp_runtime/enum.TransactionEra.html\" title=\"enum bp_runtime::TransactionEra\">TransactionEra</a>&lt;BlockNumber, BlockHash&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/cmp.rs.html#239\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","bp_runtime::chain::TransactionEraOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-TransactionEra%3CBlockNumber,+BlockHash%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bp_runtime/lib.rs.html#156\">source</a><a href=\"#impl-Clone-for-TransactionEra%3CBlockNumber,+BlockHash%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;BlockNumber: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, BlockHash: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"bp_runtime/enum.TransactionEra.html\" title=\"enum bp_runtime::TransactionEra\">TransactionEra</a>&lt;BlockNumber, BlockHash&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bp_runtime/lib.rs.html#156\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"enum\" href=\"bp_runtime/enum.TransactionEra.html\" title=\"enum bp_runtime::TransactionEra\">TransactionEra</a>&lt;BlockNumber, BlockHash&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","bp_runtime::chain::TransactionEraOf"],["<section id=\"impl-Copy-for-TransactionEra%3CBlockNumber,+BlockHash%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bp_runtime/lib.rs.html#156\">source</a><a href=\"#impl-Copy-for-TransactionEra%3CBlockNumber,+BlockHash%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;BlockNumber: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, BlockHash: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"bp_runtime/enum.TransactionEra.html\" title=\"enum bp_runtime::TransactionEra\">TransactionEra</a>&lt;BlockNumber, BlockHash&gt;</h3></section>","Copy","bp_runtime::chain::TransactionEraOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-TransactionEra%3CBlockNumber,+BlockHash%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bp_runtime/lib.rs.html#156\">source</a><a href=\"#impl-Debug-for-TransactionEra%3CBlockNumber,+BlockHash%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;BlockNumber, BlockHash&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"bp_runtime/enum.TransactionEra.html\" title=\"enum bp_runtime::TransactionEra\">TransactionEra</a>&lt;BlockNumber, BlockHash&gt;<span class=\"where fmt-newline\">where\n    BlockNumber: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    BlockHash: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bp_runtime/lib.rs.html#156\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, fmt: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","bp_runtime::chain::TransactionEraOf"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()